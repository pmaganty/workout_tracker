const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    console.log("GET LAST WORKOUT RETURN: " + json.length - 1);

    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];
    console.log(id); //FOR DEBUG ADDED BY PRAN

    const res = await fetch("/api/workouts/" + id, { //where is the id coming from???
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    console.log("ADD EXERCISE RESPONSE RECEIVED: " + json);

    return json;
  },
  async createWorkout(data = {}) { //what's the intent here?? Why is data empty??
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();
    console.log(json);



    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
