import "../assets/css/app.css";
import Button from "../components/button.js";
const App = () => {
  return {
    components: {
      "olova-button": Button,
    },
    template: `
    <section class="image-section" aria-labelledby="image">
    <img :src="img" alt="olova">
   </section>

   <!-- Counter and button section -->
    <section class="counter-section" aria-labelledby="counter">
        <h1 id="counter">{count}</h1>
        <olova-button click="increment" text="Increment"></olova-button>
    </section>

    <section class="faq">
    <h4>Edit <span style="color: white">src/app.js</span> and save to test olova!</h4> 
    </section>
    `,
    data: {
      img: "../assets/img/olova.png",
      count: 0,
    },
    methods: {
      increment() {
        this.count++;
      },
    },
    mounted() {
      console.log("App Mounted!");
    },
  };
};

export default App;
