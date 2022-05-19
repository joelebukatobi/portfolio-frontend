export default function Resume() {
  return (
    <section className="resume container">
      <h4>resume</h4>
      <div className="resume__left">
        <p>
          I’m a frontend software developer, passionate about solving problems with code and transforming ideas from
          pixels to scalable products. I create usable applications with user experience as a top priority using various
          web tools, languages and technology
        </p>
        <div className="resume__card">
          <h6 className="title">core technologies</h6>
          <p>
            HTML/CSS, SASS, Javascript [ES6+], React JS, Next JS, Strapi JS TailwindCSS, Typescript, GraphQL, REST APIs
            & Figma
          </p>
        </div>
        <div className="resume__card">
          <h6 className="title">familiar with</h6>
          <p>WordPress, Node JS, ExpressJs, BulmaCSS, SEO,</p>
        </div>
        <div className="resume__card">
          <h6 className="title">work experience</h6>
          <p className="description">Datatac Nigeria Limited — Web Developer</p>
          <p className="date">March 2021 ~ Till Date</p>
          <ul className="list">
            <li className="item">
              <span>~</span> Writing and implementing efficient code
            </li>
            <li className="item">
              <span>~</span> Determining operational practicality
            </li>
            <li className="item">
              <span>~</span> Maintaining and upgrading existing systems
            </li>
            <li className="item">
              <span>~</span> Training users
            </li>
            <li className="item">
              <span>~</span> Working closely with other developers, UX designers, business and systems analyst
            </li>
            <li className="item">
              <span>~</span> Researching, designing, implementing, and managing web applications
            </li>
            <li className="item">
              <span>~</span> Identifying areas for modification in existing programs and subsequently developing these
              modifications
            </li>
          </ul>
        </div>
        <div className="resume__card">
          <p className="description">Wootlab DevC Programme - Web Developer [Remote Intern]</p>
          <p className="date">September 2021 - December 2021</p>
          <ul className="list">
            <li className="item">
              <span>~</span> Contributed to developing user interfaces for quite a number of products within three
              months while learning new skills.
            </li>
            <li className="item">
              <span>~</span> Worked with Node js and React to build web applications
            </li>
          </ul>
        </div>
      </div>
      <div className="resume__right">
        <div className="resume__card">
          <p className="description">HNG Internship [Cohort 7] — UI/UX Design [Remote Intern]</p>
          <p className="date">October 2020 - February 2021</p>
          <ul className="list">
            <li className="item">
              <span>~</span> Contributed to designing user interfaces for quite a number of products within three months
              while learning new skills
            </li>
            <li className="item">
              <span>~</span> Came up with Design Systems for quite a number of products including the MicroAPI Logo
            </li>
            <li className="item">
              <span>~</span> Picked up the basics of UI/UX Using Figma.
            </li>
          </ul>
        </div>
        <div className="resume__card">
          <p className="description">
            Naval Officers Wives Association [NOWA] Educational Center ~ Web Admin/Data Processing Instructor
          </p>
          <p className="date">November 2019 ~ February 2021</p>
          <ul className="list">
            <li className="item">
              <span>~</span> Maintaining the school's website and students portal. This performing checks, updating and
              preparing the system for each academic calendar
            </li>
            <li className="item">
              <span>~</span> Making sure the computer laboratories are functional, maintained and up and running
            </li>
          </ul>
        </div>
        <div className="resume__card">
          <p className="description">Computer and Telecom Services — Frontend Dev/Exam Admin</p>
          <p className="date">April 2019 - October 2019</p>
          <ul className="list">
            <li className="item">
              <span>~</span> Worked as a Front-end Developer using tools such as HTML, CSS, SaSS, JavaScript and
              Bootstrap.
            </li>
            <li className="item">
              <span>~</span> Administered TOEFL exams for registered students
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
