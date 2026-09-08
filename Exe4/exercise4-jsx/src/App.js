import React, { useState } from "react";
import "./App.css";

// EXERCISE 4 - JSX AND ES6



//1. PEOPLE

const people = [
  {
    name: "Jack",
    age: 50,
  },
  {
    name: "Michael",
    age: 9,
  },
  {
    name: "John",
    age: 40,
  },
  {
    name: "Ann",
    age: 19,
  },
  {
    name: "Elisabeth",
    age: 16,
  },
];


//2. ARRAY

const array = [1, 2, 3, 4];


//3. COMPANIES

const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004,
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008,
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007,
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010,
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014,
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010,
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996,
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016,
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989,
  },
];


//4. AGES

const ages = [
  33,
  12,
  20,
  16,
  5,
  54,
  21,
  44,
  61,
  13,
  15,
  45,
  25,
  64,
  32,
];


//5. PERSON

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};


//6. PEOPLE - FIND / FILTER / EVERY / SOME

// Kiểm tra một người có phải teenager không
const isTeenager = (person) => {
  return person.age >= 10 && person.age <= 20;
};


// Tìm người đầu tiên là teenager
const firstTeenager = people.find(isTeenager);


// Tìm tất cả teenager
const allTeenagers = people.filter(isTeenager);


// Kiểm tra tất cả có phải teenager không
const everyTeenager = people.every(isTeenager);


// Kiểm tra có ít nhất một teenager không
const someTeenager = people.some(isTeenager);


//7. REDUCE

// Tổng
const arraySum = array.reduce(
  (total, number) => total + number,
  0
);


// Tích
const arrayProduct = array.reduce(
  (total, number) => total * number,
  1
);


//8. COMPANY - FOREACH


const companyNames = [];

companies.forEach((company) => {
  companyNames.push(company.name);
});


//9. COMPANY - FILTER


// Công ty bắt đầu sau 1987
const companiesAfter1987 = companies.filter(
  (company) => company.start > 1987
);


//10. COMPANY - RETAIL
// Lấy Retail
// Tăng start lên 1
const retailCompanies = companies
  .filter(
    (company) => company.category === "Retail"
  )
  .map((company) => ({
    ...company,
    start: company.start + 1,
  }));


//11. COMPANY - SORT


const companiesSortedByEnd = [...companies].sort(
  (a, b) => a.end - b.end
);


//12. AGES - SORT DESCENDING

const agesDescending = [...ages].sort(
  (a, b) => b - a
);


//13. AGE - REDUCE


const totalAge = ages.reduce(
  (sum, age) => sum + age,
  0
);


//14. OBJECT DESTRUCTURING


const {
  name: firstCompanyName,
  category: firstCompanyCategory,
} = companies[0];


const newCompany = {
  name: firstCompanyName,
  category: firstCompanyCategory,

  print() {
    return this.name;
  },
};


//15. REST PARAMETER


const sumNumbers = (...numbers) => {
  return numbers.reduce(
    (sum, number) => sum + number,
    0
  );
};


//16. ADD ANY TYPE TO ARRAY


const addToArray = (...items) => {
  const result = [];

  items.forEach((item) => {

    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }

  });

  return result;
};


//17. NESTED DESTRUCTURING

const {
  address: { street },
} = person;


//18. COUNTER


const createCounter = () => {

  let count = 0;

  return () => {
    count += 1;
    return count;
  };

};

const counter = createCounter();


//19. URL QUERY PARAMETERS


const parseQueryParameters = (url) => {

  const queryString =
    url.split("?")[1] || "";

  const params =
    new URLSearchParams(queryString);

  const result = {};

  for (const [key, value] of params.entries()) {
    result[key] = value;
  }

  return result;
};


const queryResult =
  parseQueryParameters(
    "https://example.com/?name=John&age=20&city=Hanoi"
  );


//20. CLASS - SHAPE
class Shape {

  constructor(color) {
    this.color = color;
  }

  getArea() {
    return 0;
  }

  toString() {
    return `Shape[color=${this.color}]`;
  }

}


//21. CLASS - RECTANGLE


class Rectangle extends Shape {

  constructor(color, length, width) {

    super(color);

    this.length = length;
    this.width = width;

  }

  getArea() {

    return this.length * this.width;

  }

  toString() {

    return `Rectangle[color=${this.color}, length=${this.length}, width=${this.width}]`;

  }

}


//22. CLASS - TRIANGLE


class Triangle extends Shape {

  constructor(color, base, height) {

    super(color);

    this.base = base;
    this.height = height;

  }

  getArea() {

    return (this.base * this.height) / 2;

  }

  toString() {

    return `Triangle[color=${this.color}, base=${this.base}, height=${this.height}]`;

  }

}


//23. CREATE OBJECTS

const rectangle =
  new Rectangle(
    "blue",
    10,
    5
  );


const shape =
  new Shape(
    "green"
  );


const triangle =
  new Triangle(
    "red",
    10,
    6
  );


//24. PROMISE

const randomNumberPromise = () => {

  return new Promise(
    (resolve, reject) => {

      const number =
        Math.floor(
          Math.random() * 10
        ) + 1;


      if (number > 5) {

        resolve(number);

      } else {

        reject(new Error("Random number must be greater than 5"));

      }

    }
  );

};


//REACT COMPONENT


function App() {

  //STATE
  const [
    promiseResult,
    setPromiseResult
  ] = useState("");


  const [
    counterValue,
    setCounterValue
  ] = useState(0);


  //RUN PROMISE
  const runPromise = () => {

    randomNumberPromise()

      .then((number) => {

        setPromiseResult(
          `Random number: ${number}`
        );

      })

      .catch((error) => {

        setPromiseResult(error.message);

      });

  };


  //RUN COUNTER
  const runCounter = () => {

    setCounterValue(
      counter()
    );

  };


  //RETURN JSX
  return (

    <div className="app">


      {/* =============================================
          HEADER
      ============================================= */}

      <header className="header">

        <h1>
          Exercise 4: JSX and ES6
        </h1>

        <p>
          React + JSX + JavaScript ES6
        </p>

      </header>


      {/* =============================================
          EXERCISE 1
      ============================================= */}

      <section className="section">

        <h2>
          1. Hello React
        </h2>

        <div className="hello-react">

          Hello{" "}

          <span>
            React
          </span>

        </div>

      </section>


      {/* =============================================
          EXERCISE 2
      ============================================= */}

      <section className="section">

        <h2>
          2. React Logo
        </h2>


        <div className="react-logo-container">


          <svg
            className="react-logo"
            viewBox="0 0 200 200"
            width="250"
            height="250"
          >

            <ellipse
              cx="100"
              cy="100"
              rx="80"
              ry="30"
              fill="none"
              stroke="#61dafb"
              strokeWidth="8"
            />


            <ellipse
              cx="100"
              cy="100"
              rx="80"
              ry="30"
              fill="none"
              stroke="#61dafb"
              strokeWidth="8"
              transform="rotate(60 100 100)"
            />


            <ellipse
              cx="100"
              cy="100"
              rx="80"
              ry="30"
              fill="none"
              stroke="#61dafb"
              strokeWidth="8"
              transform="rotate(120 100 100)"
            />


            <circle
              cx="100"
              cy="100"
              r="15"
              fill="#61dafb"
            />

          </svg>


          <hr />


          <h3>
            This is the React logo!
          </h3>


          <p>
            The library for web and native user interfaces
          </p>


        </div>

      </section>


      {/* =============================================
          EXERCISE 3
      ============================================= */}

      <section className="section">

        <h2>
          3. Navbar with JSX
        </h2>


        <nav className="navbar">

          <a className="active" href="#home">
            Home
          </a>


          <a href="#search">
            Search
          </a>


          <a href="#contact">
            Contact
          </a>


          <a className="login" href="#login">
            Login
          </a>

        </nav>

      </section>


      {/* =============================================
          EXERCISE 4
      ============================================= */}

      <section className="section">

        <h2>
          4. Display Text
        </h2>


        <h1 className="jsx-text">
          This is JSX
        </h1>

      </section>


      {/* =============================================
          EXERCISE 5
      ============================================= */}

      <section className="section">

        <h2>
          5. Display List of Course
        </h2>


        <h1>
          Course names
        </h1>


        <ul className="course-list">

          <li>
            React
          </li>

          <li>
            ReactNative
          </li>

          <li>
            NodeJs
          </li>

        </ul>

      </section>


      {/* =============================================
          PEOPLE
      ============================================= */}

      <section className="section">

        <h2>
          6. People - ES6
        </h2>


        <div className="result-box">

          <h3>
            People
          </h3>


          {people.map((person) => (

            <p key={person.name}>

              {person.name}
              {" - "}
              {person.age}
              {" years old"}

            </p>

          ))}


          <hr />


          <p>

            <strong>
              First teenager:
            </strong>

            {" "}

            {firstTeenager.name}

          </p>


          <p>

            <strong>
              All teenagers:
            </strong>

            {" "}

            {allTeenagers
              .map(
                (person) =>
                  person.name
              )
              .join(", ")}

          </p>


          <p>

            <strong>
              Every person is teenager:
            </strong>

            {" "}

            {everyTeenager.toString()}

          </p>


          <p>

            <strong>
              Any person is teenager:
            </strong>

            {" "}

            {someTeenager.toString()}

          </p>

        </div>

      </section>


      {/* =============================================
          REDUCE
      ============================================= */}

      <section className="section">

        <h2>
          7. Reduce and Arrow Function
        </h2>


        <div className="result-box">

          <p>

            <strong>
              Array:
            </strong>

            {" "}

            {array.join(", ")}

          </p>


          <p>

            <strong>
              Sum:
            </strong>

            {" "}

            {arraySum}

          </p>


          <p>

            <strong>
              Product:
            </strong>

            {" "}

            {arrayProduct}

          </p>

        </div>

      </section>


      {/* =============================================
          COMPANIES
      ============================================= */}

      <section className="section">

        <h2>
          8. Companies
        </h2>


        <h3>
          Company names using forEach()
        </h3>


        <ul>

          {companyNames.map(
            (name) => (

              <li key={name}>
                {name}
              </li>

            )
          )}

        </ul>


        <h3>
          Companies started after 1987
        </h3>


        <ul>

          {companiesAfter1987.map(
            (company) => (

              <li
                key={company.name}
              >

                {company.name}
                {" - "}
                {company.start}

              </li>

            )
          )}

        </ul>


        <h3>
          Retail Companies
        </h3>


        <div className="company-grid">

          {retailCompanies.map(
            (company) => (

              <div
                className="company-card"
                key={company.name}
              >

                <p>

                  <strong>
                    Name:
                  </strong>

                  {" "}

                  {company.name}

                </p>


                <p>

                  <strong>
                    Category:
                  </strong>

                  {" "}

                  {company.category}

                </p>


                <p>

                  <strong>
                    Start:
                  </strong>

                  {" "}

                  {company.start}

                </p>


                <p>

                  <strong>
                    End:
                  </strong>

                  {" "}

                  {company.end}

                </p>

              </div>

            )
          )}

        </div>


        <h3>
          Companies sorted by end date
        </h3>


        <div className="table-container">

          <table>

            <thead>

              <tr>

                <th>
                  Name
                </th>

                <th>
                  Category
                </th>

                <th>
                  Start
                </th>

                <th>
                  End
                </th>

              </tr>

            </thead>


            <tbody>

              {companiesSortedByEnd.map(
                (company) => (

                  <tr
                    key={company.name}
                  >

                    <td>
                      {company.name}
                    </td>

                    <td>
                      {company.category}
                    </td>

                    <td>
                      {company.start}
                    </td>

                    <td>
                      {company.end}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </section>


      {/* =============================================
          AGES
      ============================================= */}

      <section className="section">

        <h2>
          9. Ages
        </h2>


        <div className="result-box">

          <p>

            <strong>
              Original:
            </strong>

            {" "}

            {ages.join(", ")}

          </p>


          <p>

            <strong>
              Descending:
            </strong>

            {" "}

            {agesDescending.join(", ")}

          </p>


          <p>

            <strong>
              Sum:
            </strong>

            {" "}

            {totalAge}

          </p>

        </div>

      </section>


      {/* =============================================
          OBJECT DESTRUCTURING
      ============================================= */}

      <section className="section">

        <h2>
          10. Object Destructuring
        </h2>


        <div className="result-box">

          <p>

            Company name:
            {" "}

            {newCompany.name}

          </p>


          <p>

            Category:
            {" "}

            {newCompany.category}

          </p>


          <p>

            Print:
            {" "}

            {newCompany.print()}

          </p>

        </div>

      </section>


      {/* =============================================
          REST PARAMETERS
      ============================================= */}

      <section className="section">

        <h2>
          11. Rest Parameters
        </h2>


        <div className="result-box">

          <p>

            sumNumbers(
            1, 2, 3, 4, 5
            )

          </p>


          <p>

            <strong>
              Result:
            </strong>

            {" "}

            {sumNumbers(
              1,
              2,
              3,
              4,
              5
            )}

          </p>

        </div>

      </section>


      {/* =============================================
          ADD ANY TYPE
      ============================================= */}

      <section className="section">

        <h2>
          12. Add Any Type to Array
        </h2>


        <div className="result-box">

          <p>
            Input:
          </p>


          <pre>
{`addToArray(
  1,
  "Hello",
  [2, 3],
  true
)`}
          </pre>


          <p>
            Result:
          </p>


          <pre>
{JSON.stringify(
  addToArray(
    1,
    "Hello",
    [2, 3],
    true
  ),
  null,
  2
)}
          </pre>

        </div>

      </section>


      {/* =============================================
          STREET
      ============================================= */}

      <section className="section">

        <h2>
          13. Destructuring Street
        </h2>


        <div className="result-box">

          <p>

            Name:
            {" "}

            {person.name}

          </p>


          <p>

            Street:
            {" "}

            {street}

          </p>

        </div>

      </section>


      {/* =============================================
          COUNTER
      ============================================= */}

      <section className="section">

        <h2>
          14. Counter Function
        </h2>


        <div className="result-box counter-box">

          <h3>

            Current value:
            {" "}

            {counterValue}

          </h3>


          <button
            onClick={runCounter}
          >

            Call Counter

          </button>

        </div>

      </section>


      {/* =============================================
          QUERY PARAMETERS
      ============================================= */}

      <section className="section">

        <h2>
          15. URL Query Parameters
        </h2>


        <div className="result-box">

          <p>
            URL:
          </p>


          <code>
            https://example.com/?name=John&age=20&city=Hanoi
          </code>


          <pre>
{JSON.stringify(
  queryResult,
  null,
  2
)}
          </pre>

        </div>

      </section>


      {/* =============================================
          CLASSES
      ============================================= */}

      <section className="section">

        <h2>
          16. Classes
        </h2>


        <div className="shape-grid">


          {/* Shape */}

          <div className="shape-card">

            <h3>
              Shape
            </h3>

            <p>

              Color:
              {" "}

              {shape.color}

            </p>

            <p>

              Area:
              {" "}

              {shape.getArea()}

            </p>

          </div>


          {/* Rectangle */}

          <div className="shape-card">

            <h3>
              Rectangle
            </h3>


            <p>

              Color:
              {" "}

              {rectangle.color}

            </p>


            <p>

              Length:
              {" "}

              {rectangle.length}

            </p>


            <p>

              Width:
              {" "}

              {rectangle.width}

            </p>


            <p>

              Area:
              {" "}

              {rectangle.getArea()}

            </p>


            <p>
              {rectangle.toString()}
            </p>

          </div>


          {/* Triangle */}

          <div className="shape-card">

            <h3>
              Triangle
            </h3>


            <p>

              Color:
              {" "}

              {triangle.color}

            </p>


            <p>

              Base:
              {" "}

              {triangle.base}

            </p>


            <p>

              Height:
              {" "}

              {triangle.height}

            </p>


            <p>

              Area:
              {" "}

              {triangle.getArea()}

            </p>


            <p>
              {triangle.toString()}
            </p>

          </div>


        </div>

      </section>


      {/* =============================================
          PROMISE
      ============================================= */}

      <section className="section">

        <h2>
          17. Promise
        </h2>


        <div className="promise-box">

          <p>

            Generate a random number
            from 1 to 10.

          </p>


          <p>

            If number &gt; 5:
            show number.

          </p>


          <p>

            If number &le; 5:
            show Error.

          </p>


          <button
            onClick={runPromise}
          >

            Generate Random Number

          </button>


          {promiseResult && (

            <div className="promise-result">

              {promiseResult}

            </div>

          )}

        </div>

      </section>


      {/* =============================================
          FOOTER
      ============================================= */}

      <footer>

        <p>
          Exercise 4 - JSX and ES6
        </p>

        <p>
          Built with React
        </p>

      </footer>


    </div>

  );
}


export default App;