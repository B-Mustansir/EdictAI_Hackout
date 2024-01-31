const Breadcrumb = ({ breadcrumbTitle }) => {
  return (
    <section className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                {breadcrumbTitle}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Breadcrumb;
