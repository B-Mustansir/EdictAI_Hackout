import Layout from "components/layout/Layout";
const JobDetails = () => {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={ <> Job <span>Details</span> </> } >
      <section className="job-details-area pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="job-details-content">
                <h2 className="title">
                  Senior Software Engineer - (Full-Time)
                </h2>
                <div className="job-qualifications">
                  <ul className="list-wrap">
                    <li>Department: Web Development</li>
                    <li>No. of Openings : 3</li>
                    <li>Job Type: Full-Time</li>
                    <li>Location: Warsaw, Poland</li>
                    <li>
                      Salary range: $80k to $100k (Based on your experience).
                    </li>
                    <li>
                      Working days: Weekly 05 days. Sunday To Thursday. 09 AM to
                      06 PM.(Launch Break 01 Hour)
                    </li>
                    <li>Application Deadline: October 10, 2023</li>
                    <li>Experience Required: 6+ Years</li>
                  </ul>
                  <p className="info-one">
                    We’re looking for an eager and knowledgeable WordPress
                    Developer to join our technical team in Warsaw, Poland.
                    You’ll be expected to utilize bleeding-edge technology and
                    robust techniques. You should be an excellent communicator
                    and comfortable managing multiple tasks. you also need to be
                    a team player and have a problem-solving aptitude.
                  </p>
                  <p>
                    Working quickly and creatively should come naturally to you,
                    as well as being an innovative problem-solver who takes
                    pride in producing logical, simple, and effective solutions
                    to what are often very new and complex issues.
                  </p>
                </div>
                <div className="job-details-list-wrap">
                  <h2 className="title-two">What you'll get to do...</h2>
                  <ul className="list-wrap">
                    <li>
                      Refactor current code to service-oriented architecture.
                    </li>
                    <li>
                      Collaborate with a unique background of engineering,
                      product, and operations team members to deliver the best
                      solution for our customers.
                    </li>
                    <li>
                      Solve technical problems that few have solved before – no
                      one else helps local businesses the way we do.
                    </li>
                    <li>
                      Participate in the decision-making progress – we want you
                      to speak up.
                    </li>
                    <li>
                      Mentor your team members to share your passion for
                      software, your appreciation for engineering field, and
                      your respect for the craft of software development.
                    </li>
                    <li>
                      Take on the challenge of making what you build higher
                      quality, faster, and more scalable.
                    </li>
                    <li>Participate in on-call rotation.</li>
                  </ul>
                </div>
                <div className="job-details-list-wrap">
                  <h2 className="title-two">
                    Your experience should include...
                  </h2>
                  <ul className="list-wrap">
                    <li>
                      6+ years of previous professional software development
                      experience.
                    </li>
                    <li>
                      Previous backend restful API development experience.
                    </li>
                    <li>
                      Strong experience in a programming languages like Python,
                      PHP, NodeJS, Java, etc.
                    </li>
                    <li>
                      Can adapt to new or different programming languages.
                    </li>
                    <li>
                      Experience integrating a broad variety of technologies via
                      API consumption/production.
                    </li>
                    <li>
                      Ability to collaborate with a unique background of
                      engineering, product, and operations team members to
                      deliver the best solution for our customers.
                    </li>
                    <li>
                      Deep knowledge and a passion for coding standards and
                      following proven design patterns.
                    </li>
                    <li>Solid foundation in data structures and algorithms.</li>
                    <li>
                      Experience with Agile, working in sprints and
                      participating in the agile ceremonies.
                    </li>
                  </ul>
                </div>
                <div className="job-details-list-wrap">
                  <h2 className="title-two">You might also have...</h2>
                  <ul className="list-wrap">
                    <li>Experience with AWS.</li>
                    <li>
                      Experience building CI/CD and server/deployment automation
                      solutions.
                    </li>
                    <li>
                      Experience with open-source puppet,
                      infrastructure-as-code.
                    </li>
                    <li>Passion for technology.</li>
                    <li>
                      You have high standards and want to make a difference with
                      your work.
                    </li>
                    <li>You are always trying to improve.</li>
                  </ul>
                </div>
                <div className="job-details-list-wrap">
                  <h2 className="title-two">Great benefits...</h2>
                  <ul className="list-wrap">
                    <li>Company-wide 401(k) plan.</li>
                    <li>Life disability insurance offered.</li>
                    <li>Competitive compensation—salary, bonus, equity.</li>
                    <li>Medical, dental, and vision; flex spending account.</li>
                    <li>Flexible paid time off sick leave.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="job-apply-form-wrap">
                <form action="#" className="apply-form">
                  <h2 className="title">Apply for this job</h2>
                  <span>
                    Dex.ai doesn’t accept unsolicited resumes from recruiters or
                    employment agencies.
                  </span>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="name">Your Name *</label>
                        <input type="text" id="name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="email">Your Email *</label>
                        <input type="email" id="email" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="phone">Phone *</label>
                        <input type="number" id="phone" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="address">Address *</label>
                        <input type="text" id="address" />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <label htmlFor="posting">
                      Which job posting are you applying for ? *
                    </label>
                    <input type="text" id="posting" />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="opening">
                      From where you have heard about the job opening? *
                    </label>
                    <input type="text" id="opening" />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="salary">
                      What is your expected salary? *
                    </label>
                    <input type="text" id="salary" />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" />
                  </div>
                  <div className="form-grp resume-grp">
                    <label htmlFor="resume">Resume/CV *</label>
                    <div className="resume-inner">
                      <input type="file" id="resume" />
                      <span className="resume-btn">Resume/CV</span>
                    </div>
                    <span>
                      <strong>Accepted file types :</strong> pdf, doc, jpg, Max.
                      file size: 15 MB.
                    </span>
                  </div>
                  <button type="submit" className="btn">
                    SUBMIT NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default JobDetails;
