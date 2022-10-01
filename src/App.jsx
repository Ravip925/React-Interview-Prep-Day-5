import "./App.css";
import ClickCounter from "./Components/ClickCounter";

const App = () => {
  return (
    <div className="App">
      <center>
        <h1>React Interview Prep Day-5</h1>
      </center>

      <div className="Hoc">
        <h3>Higher Order Component</h3>
        <h5>
          A higher-order component (HOC) is a function that takes a component
          and returns a new component. Basically, it's a pattern that is derived
          from React's compositional nature. We call them pure components
          because they can accept any dynamically provided child component but
          they won't modify or copy any behavior from their input components.
          const EnhancedComponent = higherOrderComponent(WrappedComponent)
        </h5>
        <ClickCounter />
      </div>
      <hr />
      <div className="seo">
        <h3>
          Do you know about SEO ? Is it true that react js supports SEO support?
        </h3>
        <h5>
          Search engine optimization (SEO) is the process of structuring and
          organizing a website to expand the volume of traffic by increasing its
          position and frequency of appearance in search engines, focusing on
          keywords that reveal the specifics of the site. It helps bring as many
          people to your web service as possible and helps create organic
          traffic on your website, turning your visitors into customers.
        </h5>
      </div>
      <hr />
      <div className="clean">
        <h3>Clean up in useEffect.</h3>
        <h5>
          clean up function: this function gets executed when the component is
          unmounted from the screen. This is mostly used for memory leaks.
          React's useEffect cleanup function saves applications from unwanted
          behaviors like memory leaks by cleaning up effects.
        </h5>
      </div>
      <hr />
      <div className="memo">
        <h3>What is the use of useMemo and useCallback?</h3>
        <h4>Use of useMemo:</h4>
        <h5>
          React has a built-in hook called useMemo that allows you to memoize
          expensive functions so that you can avoid calling them on every
          render. You simple pass in a function and an array of inputs and
          useMemo will only recompute the memoized value when one of the inputs
          has changed.
        </h5>
        <h4>Use of useCallback:</h4>
        <h5>
          useCallback will return a memoized version of the callback that only
          changes if one of the dependencies has changed. This is useful when
          passing callbacks to optimized child components that rely on reference
          equality to prevent unnecessary renders.
        </h5>
      </div>
      <hr />
      <div className="key">
        <h3> Why do we need keys in react list?</h3>
        <h5>
          The main purpose of keys is to help React differentiate and
          distinguish elements from each other, increasing its performance when
          diffing between the virtual and real DOM. To use keys, simply add the
          prop inside an element such as . Unique IDs are the best value to
          assign to keys. (or) "Key" prop is used to look pretty, and there is
          no benefit whatsoever. "Key" prop is a way for React to identify a
          newly added item in a list and compare it during the "diffing"
          algorithm. It is one of the attributes in HTML. It is NOT commonly
          used in an array.
        </h5>
      </div>
      <hr />
      <div className="redux">
        <h3>Do you know about redux?</h3>
        <h5>
          Redux is a pattern and library for managing and updating application
          state, using events called "actions". It serves as a centralized store
          for state that needs to be used across your entire application, with
          rules ensuring that the state can only be updated in a predictable
          fashion. Here is a small example of react and Redux application. You
          can also try developing small apps. Sample code for increase or
          decrease counter is given below − This is the root file which is
          responsible for the creation of store and rendering our react app
          component.
        </h5>
      </div>
    </div>
  );
};

export default App;
