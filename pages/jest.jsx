import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, age, gender });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
          >
            <option value="">-- Select gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <button type="submit">Submit</button>

      <style jsx>{`
        .form-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .form-group {
          flex-basis: calc(100% / 2 - 1rem);
          margin-bottom: 1rem;
        }

        label {
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #c8bfb0;
          display: block;
        }

        input,
        select {
          border: none;
          background-color: #f5f5f5;
          padding: 0.5rem;
          border-radius: 0.25rem;
          width: 100%;
          margin-top: 0.5rem;
        }

        button[type='submit'] {
          background-color: #c8bfb0;
          color: #fff;
          border: none;
          border-radius: 0.25rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }

        @media only screen and (min-width: 768px) {
          .form-group {
            flex-basis: calc(100% / 3 - 1rem);
          }
        }
      `}</style>
    </form>
  );
};

export default Form;
 