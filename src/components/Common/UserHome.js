import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      products: [
        {
          "firstname": "Meagan",
          "lastname": "Lang",
          "phonenumber": "(388) 575-4563",
          "city": "Miracletown",
          "state": "Louisiana",
          "country": "Uzbekistan",
          "__v": 0
        },
        {
          "firstname": "Katherine",
          "lastname": "Koelpin",
          "phonenumber": "352.564.0634 x9225",
          "city": "Huelburgh",
          "state": "Arkansas",
          "country": "San Marino",
          "__v": 0
        },
        {
          "firstname": "Rafaela",
          "lastname": "Harber",
          "phonenumber": "1-918-908-3338",
          "city": "West Chazberg",
          "state": "California",
          "country": "Turkmenistan",
          "__v": 0
        },
        {
          "firstname": "Lolita",
          "lastname": "Blick",
          "phonenumber": "648-206-6783 x87158",
          "city": "Stokesmouth",
          "state": "Kentucky",
          "country": "French Guiana",
          "__v": 0
        },
        {
          "firstname": "Erin",
          "lastname": "Gerhold",
          "phonenumber": "612.447.8725 x855",
          "city": "Lake Tyrel",
          "state": "Massachusetts",
          "country": "Rwanda",
          "__v": 0
        },
        {
          "firstname": "Taryn",
          "lastname": "Wehner",
          "phonenumber": "303-920-0901 x4506",
          "city": "West Lessie",
          "state": "Arkansas",
          "country": "Zimbabwe",
          "__v": 0
        },
        {
          "firstname": "Jayne",
          "lastname": "Parisian",
          "phonenumber": "569-976-5532",
          "city": "North Anastacio",
          "state": "Virginia",
          "country": "Slovakia (Slovak Republic)",
          "__v": 0
        },
        {
          "firstname": "Bertha",
          "lastname": "Ernser",
          "phonenumber": "499-597-2452 x079",
          "city": "Jacobiport",
          "state": "Florida",
          "country": "Virgin Islands, U.S.",
          "__v": 0
        },
        {
          "firstname": "Rod",
          "lastname": "Jacobi",
          "phonenumber": "(232) 486-0909",
          "city": "South Lavernchester",
          "state": "Georgia",
          "country": "United States of America",
          "__v": 0
        },
        {
          "firstname": "Jamel",
          "lastname": "Jacobi",
          "phonenumber": "(614) 821-9286 x6435",
          "city": "West Talonberg",
          "state": "Massachusetts",
          "country": "Lesotho",
          "__v": 0
        },
        {
          "firstname": "Tyson",
          "lastname": "Quitzon",
          "phonenumber": "1-328-961-6345 x6591",
          "city": "Waelchishire",
          "state": "Indiana",
          "country": "Peru",
          "__v": 0
        },
        {
          "firstname": "Abbey",
          "lastname": "Monahan",
          "phonenumber": "394-490-8017",
          "city": "Lake Nasir",
          "state": "Michigan",
          "country": "Guernsey",
          "__v": 0
        },
        {
          "firstname": "Tremayne",
          "lastname": "Beahan",
          "phonenumber": "632.396.4034 x466",
          "city": "Holliefurt",
          "state": "Ohio",
          "country": "Gambia",
          "__v": 0
        },
        {
          "firstname": "Amara",
          "lastname": "Kassulke",
          "phonenumber": "(202) 210-2238 x1381",
          "city": "Ruthland",
          "state": "Utah",
          "country": "Tonga",
          "__v": 0
        },
        {
          "firstname": "Brennon",
          "lastname": "Upton",
          "phonenumber": "1-711-930-3714",
          "city": "East Camden",
          "state": "Maryland",
          "country": "Chile",
          "__v": 0
        },
        {
          "firstname": "Ashtyn",
          "lastname": "McClure",
          "phonenumber": "1-900-562-7465",
          "city": "North Demarioburgh",
          "state": "Massachusetts",
          "country": "Togo",
          "__v": 0
        },
        {
          "firstname": "Georgette",
          "lastname": "Hammes",
          "phonenumber": "626-249-9647",
          "city": "Royceshire",
          "state": "Arkansas",
          "country": "Guinea-Bissau",
          "__v": 0
        },
        {
          "firstname": "Heber",
          "lastname": "Maggio",
          "phonenumber": "443.671.4353 x6149",
          "city": "West Winnifred",
          "state": "Delaware",
          "country": "Netherlands",
          "__v": 0
        },
        {
          "firstname": "Hassan",
          "lastname": "Ryan",
          "phonenumber": "(341) 860-4284",
          "city": "Johnsonmouth",
          "state": "South Dakota",
          "country": "United Arab Emirates",
          "__v": 0
        },
        {
          "firstname": "Shanelle",
          "lastname": "Kautzer",
          "phonenumber": "898-269-0900",
          "city": "New Manuelachester",
          "state": "New Jersey",
          "country": "Norfolk Island",
          "__v": 0
        }

      ],

      columns: [

        {
          dataField: 'firstname',
          text: 'First Name',
          filter: textFilter()
        },

        {
          dataField: 'lastname',
          text: 'Last Name',
          sort: true,
          filter: textFilter()

        },
        {
          dataField: 'phonenumber',
          text: 'Phone',
          sort: true,
          filter: textFilter()
        },
        {
          dataField: 'city',
          text: 'City',
          sort: true,
          filter: textFilter()
        },
        {
          dataField: 'state',
          text: 'State',
          sort: true,
          filter: textFilter()
        },
        {
          dataField: 'action',
          text: 'Action',
          sort: false,
          formatter: (cell, row, rowIndex, extraData) => (
            <Fragment>
              <button type="button" className="mr-1  btn btn-primary btn-sm" onClick={(e) => this.handleView(cell, row, rowIndex, extraData)}><i className="fa fa-eye"></i></button>
              <button type="button" className="mr-1 btn btn-success btn-sm" onClick={(e) => this.handleEdit(cell, row, rowIndex, extraData)}><i className="fa fa-edit"></i></button>
              <button type="button" className="mr-1 btn btn-danger btn-sm" onClick={(e) => this.handleDelete(cell, row, rowIndex, extraData)}><i className="fa fa-trash"></i></button>
            </Fragment>
          ),
          // events: {
          //   onClick: (e, column, columnIndex, row, rowIndex) => {
          //     //console.log(e);
          //     console.log(column);
          //     console.log(columnIndex);
          //     console.log(row);
          //     console.log(rowIndex);
          //     console.log('Click on Product ID field', row.id);
          //   }
          // }

        }]

    }

  }

  handleView = (cell, row, rowIndex, extraData) => {
    console.log('handleView', row, rowIndex)
  }
  handleEdit = (cell, row, rowIndex, extraData) => {
    console.log('handleEdit', row, rowIndex)
  }
  handleDelete = (cell, row, rowIndex, extraData) => {
    console.log('handleDelete', row, rowIndex)
  }

  handleAddUser = () => {
    console.log('handleAddUser',this.props.history)
    this.props.history.push("/admin/addUser")
  }


  render() {

    const options = {
      page: 1,

      sizePerPageList: [{

        text: '5', value: 5

      }, {

        text: '10', value: 10

      }, {

        text: 'All', value: this.state.products.length

      }],

      sizePerPage: 5,

      pageStartIndex: 1,

      paginationSize: 3,

      prePage: 'Prev',

      nextPage: 'Next',

      firstPage: 'First',

      lastPage: 'Last',

      paginationPosition: 'top'

    };


    return (<section id="main-content">
      <section className="wrapper">

        <div className="container">

          <div className="row" className="hdr">
          </div>

          <div className="container" style={{ marginTop: 50 }}>
            <button type="button" className="mr-1  btn btn-primary btn-sm" onClick={this.handleAddUser}>
              <i className="fa fa-user-plus">
              </i></button>
            <br />
            <BootstrapTable

              striped

              hover

              keyField='id'

              data={this.state.products}

              columns={this.state.columns}

              filter={filterFactory()}

              pagination={paginationFactory(options)}
            />

          </div>

        </div>
      </section>
    </section>
    )
  }
}

export default UserHome;
