import { useReducer } from "react";
import PersonDesc from "./PersonDesc";

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, [action.field]: action.value };
    case "check":
      return { ...state, [action.field]: action.checked };
    case 'showData':
      return {...state, showData: true}
    default:
      throw new Error("Something is wrong");
  }
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  comment: "",
  isFriendly: null,
  employment: "",
  favColor: "",
  showData: null
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const fullName = `${state.firstName} ${state.lastName}`;

  const handleChange = (e) => {
    dispatch({
      type: "change",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleCheck = (e) => {
    dispatch({
      type: "check",
      field: e.target.name,
      checked: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'showData',
      
    })
    console.log(state);
  };

  return (
    <>
      <form action="" method="post" id="my-form" onSubmit={handleSubmit}>
        <h1>This is dummy form.</h1>
        <label htmlFor="first-name">First Name</label>
        <input
          placeholder="first name"
          name="firstName"
          id="first-name"
          className="input"
          type="text"
          // value={state.fName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="last-name">Last name</label>
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          id="last-name"
          className="input"
          onChange={handleChange}
        />
        <p>{fullName}</p>
        <br />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          id="email"
          className="input"
          onChange={handleChange}
        />
        <p>{state.email}</p>
        <br />
        <textarea
          placeholder="write your text here"
          name="comment"
          id="comment"
          className="textarea"
          onChange={handleChange}
        />
        <p>{state.comment}</p>
        <br />
        <input
          type="checkbox"
          id="isFriendly"
          name="isFriendly"
          className="input-checkbox"
          onChange={handleCheck}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <p>
          {state.isFriendly && (
            <b>{state.isFriendly ? "yes" : "no"}, I am friendly.</b>
          )}
        </p>
        {/* radio */}
        <fieldset>
          <legend>Current employment status</legend>
          <input
            type="radio"
            name="employment"
            id="unemployed"
            value="unemployed"
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />
          <input
            type="radio"
            name="employment"
            id="part-time"
            value="part-time"
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />
          <input
            type="radio"
            name="employment"
            id="full-time"
            value="full-time"
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time </label>
          <p>
            <b>
              {state.employment && (
                <i>
                  {fullName} is {state.employment}
                </i>
              )}
            </b>
          </p>
        </fieldset>
        {/* select element */}
        <fieldset>
          <legend>What is your favorite color?</legend>
          <select name="favColor" id="favColor" onChange={handleChange}>
            <option value="" disabled>
              Select a color
            </option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
          <br />
          <p>
            {state.favColor && (
              <b style={{ backgroundColor: `${state.favColor}` }}>
                My favorite color is {state.favColor}
              </b>
            )}
          </p>
        </fieldset>
        {/* submit button */}
        <button>submit</button>
      </form>
      {state.showData && <PersonDesc data={state}/>}
    </>
  );
};

export default Form;
