import React from "react";
import { SearchIcon } from "../../assets/icon";
import "./Product.scss";
import { Pagination } from "../Pagination";
export const Product = ({ toggleSideMenu }) => {
  const users = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      mail: "jane@microsoft.com",
      country: "United States",
      status: true,
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      mail: "floyd@yahoo.com",
      country: "Kiribati",
      status: false,
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      mail: "ronald@adobe.com",
      country: "Israel",
      status: false,
    },
    {
      name: "Marvin McKinney",
      company: "Tesla",
      phone: "(252) 555-0126",
      mail: "marvin@tesla.com",
      country: "Iran",
      status: true,
    },
    {
      name: "Jerome Bell",
      company: "Google",
      phone: "(629) 555-0129",
      mail: "jerome@google.com",
      country: "Réunion",
      status: true,
    },
    {
      name: "Kathryn Murphy",
      company: "Microsoft",
      phone: "(406) 555-0120",
      mail: "kathryn@microsoft.com",
      country: "Curaçao",
      status: true,
    },
    {
      name: "Jacob Jones",
      company: "Yahoo",
      phone: "(208) 555-0112",
      mail: "jacob@yahoo.com",
      country: "Brazil",
      status: true,
    },
    {
      name: "Kristin Watson",
      company: "Facebook",
      phone: "(704) 555-0127",
      mail: "kristin@facebook.com",
      country: "Åland Islands",
      status: false,
    },
  ];

  const totalPages = 40; // assuming you have 40 pages
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <section className="section">
      <div className="header">
        <button onClick={toggleSideMenu} className="toggle-side-menu">
          ☰
        </button>
        <h2>Hello Evano 👋🏼,</h2>
      </div>
      <div className="product">
        <div className="product__header">
          <div className="product__header__text">
            <h3>All Customers</h3>
            <p>Active Members</p>
          </div>
          <div className="product__header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="product__content">
          <div className="table">
            <div className="table__header">
              <div className="name">
                <p>Customer Name</p>
              </div>
              <div className="company">
                <p>Company</p>
              </div>
              <div className="phone">
                <p>Phone Number</p>
              </div>
              <div className="mail">
                <p>Email</p>
              </div>
              <div className="country">
                <p>Country</p>
              </div>
              <div className="status">
                <p>Status</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="table__content">
              {users.map((item, index) => (
                <>
                  <div key={index} className="table__content__user">
                    <div className="name">
                      <p>{item.name}</p>
                    </div>
                    <div className="company">
                      <p>{item.company}</p>
                    </div>
                    <div className="phone">
                      <p>{item.phone}</p>
                    </div>
                    <div className="mail">
                      <p>{item.mail}</p>
                    </div>
                    <div className="country">
                      <p>{item.country}</p>
                    </div>
                    {item.status ? (
                      <div className="status active">
                        <p>Active</p>
                      </div>
                    ) : (
                      <div className="status inactive">
                        <p>Inactive</p>
                      </div>
                    )}
                  </div>
                  <div className="divider"></div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="product__footer">
          <div className="product__footer__text">
            <p> Showing data 1 to 8 of 256K entries</p>
          </div>
          <div className="product__footer__pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
