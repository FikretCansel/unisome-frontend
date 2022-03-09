import React, { useState } from "react";
import { db } from "../../firebase";

export default function AddAreaOfInterest({ user }) {
  const [productsList, setProductList] = useState([
    { aiId: "1", aiName: "Resim", isChecked: false },
    { aiId: "2", aiName: "Müzik", isChecked: false },
    { aiId: "3", aiName: "Sanat", isChecked: false },
    { aiId: "4", aiName: "Ingilizce", isChecked: false },
  ]);

  const onAddingItem = (i) => {
    const product = productsList[i];
    product.isChecked = !productsList[i].isChecked;

    productsList[i] = product;

    setProductList([...productsList]);

  };

  const handleSave = async (e) => {
    e.preventDefault();

    let saveData = [];
    await productsList.map((p) => {
      if (p.isChecked === true) {
        saveData.push({ aiId: p.aiId, aiName: p.aiName });
      }
    });

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

    data.forEach(element => {
      db.collection("profiles")
      .doc(docId)
      .collection("AreasOfInterest")
      .add(element)
      .then((result) => {})
      .catch((err) => console.log(err));
    });
  };

  return (
    <div className="col-md-8">
      <div className="row">
        {productsList.map((product, i) => {
          return (
            <div className="col-md-5">
              <input
                type="checkbox"
                className="btn-check"
                name="options"
                id={product.aiId}
                value={product.aiName}
                checked={product.isChecked}
                onChange={() => onAddingItem(i)}
              />
              <label
                className={`btn btn-${
                  product.isChecked === true ? "primary" : "secondary"
                }`}
                for={product.aiId}
              >
                {product.aiName}
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
