import React, { useState,useEffect } from "react";
import { db } from "../../firebase";

export default function AddAreaOfInterest({ user }) {
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    db.collectionGroup("basicGroups")
      .get()
      .then((result) => {
        setProductList(
          result.docs.map((doc) => {
            return { id: doc.id, ...doc.data(),isChecked:false};
          })
          
        );
      })
      .catch(() => {});

  }, []);

  const onAddingItem = (i) => {
    const product = productsList[i];
    product.isChecked = !productsList[i].isChecked;

    productsList[i] = product;

    setProductList([...productsList]);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    let saveData = [];
    await productsList.forEach((p) => {
      if (p.isChecked === true) {
        saveData.push({ aiId: p.id, aiName: p.name });
      }
    });

    console.log(saveData)

    db.collection("profiles")
      .where("userId", "==", user.uid)
      .get()
      .then(async (querySnapshot) => {
        await querySnapshot.forEach(async (doc) => {
          if (doc.exists) {
            await deleteAreasOfInterest(doc.id);
          }
          AddAreaOfInterest(doc.id, saveData);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const deleteAreasOfInterest = async (docId) => {
    const query = db
      .collection("profiles")
      .doc(docId)
      .collection("AreasOfInterest");
    const snapshot = await query.get();

    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();
  };

  const AddAreaOfInterest = (docId, data) => {
    data.forEach((element) => {
      db.collection("profiles")
        .doc(docId)
        .collection("AreasOfInterest")
        .add(element)
        .then((result) => {console.log("Kayıt Başarılı")})
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className="col-md-8">
      
      <div className="row">

        {productsList.map((product, i) => {
          return (
            <div className="col-md-4">
              <input
                type="checkbox"
                className="btn-check"
                name="options"
                id={product.id}
                value={product.name}
                checked={product.isChecked}
                onChange={() => onAddingItem(i)}
              />
              <label
                className={`btn btn-${
                  product.isChecked === true ? "primary" : "secondary"
                }`}
                for={product.id}
              >
                {product.name}
              </label>
            </div>
          );
        })}
      </div>

      <div class="col-12">
        <hr class="mt-2 mb-3" />
        <div class="d-flex flex-wrap justify-content-between align-items-center">
          <div class="custom-control custom-checkbox d-block"></div>
          <button
            class="btn btn-style-1 btn-primary"
            type="submit"
            data-toast=""
            data-toast-position="topRight"
            data-toast-type="success"
            data-toast-icon="fe-icon-check-circle"
            data-toast-title="Success!"
            data-toast-message="Your profile updated successfuly."
            onClick={(e) => handleSave(e)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
