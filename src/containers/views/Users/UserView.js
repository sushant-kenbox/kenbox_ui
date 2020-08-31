import React from "react";
import UserViewComponent from "./../../../components/Users/UserView.Component"


export class UserView extends React.Component {


    handleAddUser = () => {
        console.log('handleAddUser', this.props.history)
        this.props.history.push("/admin/users/add")
    }

    render() {

        return (<section id="main-content">
            <section className="wrapper site-min-height">

                <UserViewComponent />
            </section>
        </section>
        )
    }
}

export default UserView;
