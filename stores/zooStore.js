import { makeAutoObservable } from "mobx";
import axios from "axios";
class ZooStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  animals = [];

  fetchAnimals = async () => {
    try {
      const response = await axios.get(
        "https://zoo-animal-api.herokuapp.com/animals/rand/7"
      );
      this.animals = response.data;
      //console.log(this.animals);
    } catch (error) {
      console.log("zooStore -> fetchAnimals -> error", error);
    }
  };
}

const zooStore = new ZooStore();
zooStore.fetchAnimals();
// It will only call this function when the app first starts

export default zooStore;

// axios.METHOD(URL, BODY)

// GET: Fetching Data
// axios.get("http://localhost:8000/api/products");
// Return array of products

// POST => It takes a BODY, and is used when we Send Data (Create)
// axios.post("http://localhost:8000/api/products", newObject);
// Returns a new object

// PUT =>  It takes a BODY, and is used to Update Data. We must pass an ID.
// axios.put(`http://localhost:8000/api/products/${ID}`, updatedObject);
// Returns updated object

// DELETE => Delete some data. We must pass an ID.
// axios.delete(`http://localhost:8000/api/products/${ID}`);
// Returns nothing
