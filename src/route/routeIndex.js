
import React, { Profiler } from 'react';

import { Router, Scene, Stack, Drawer, Tabs, Actions } from "react-native-router-flux";
import { View } from 'react-native';
import RouteKey from "./routeKeys";
import Splash from '../screens/splash';


import ForgetPassword from "../screens/forgetpassword";
import Login from '../screens/login';
import SignUp from '../screens/signup';

// import Sidemenu from "../screens/sidemenu";
// import Dashboard from "../screens/dashboard";


// import Profile from "../screens/profile";
// import Attendace from "../screens/attendance";
// import Leaves from "../screens/leaves";
// import Expense from "../screens/expense";
// import Notification from "../screens/notification";
// import Payroll from "../screens/payroll";
// import PayrollDetail from "../screens/payrolldetail";
// import ProfileEdit from '../screens/profileedit';
// import AttendanceInsert from '../screens/attendanceinsert';
// import LeaveDetail from '../screens/leavedetail';
// import LeaveRequest from '../screens/leaverequest';
// import ExpenseAdd from '../screens/expenseadd';
// import ExpenseDetail from '../screens/expenseDetail';

import {
    Image,
    TouchableHighlight,
    Text
} from 'react-native';



export default class RouterFlux extends React.Component {

    // sidebarButton = () => (
    //     <TouchableHighlight underlayColor="#FFFFFF" style={{ width: 25, height: 25, marginLeft: 15 }} onPress={() => { Actions.drawerOpen(); }}>
    //         <Image style={{ width: 25, height: 25 }} source={require('../assets/slide-menu/icon-menu-black.png')} />
    //     </TouchableHighlight>
    // );

    // saveBtnProfileEdit = () => (
    //     <TouchableHighlight underlayColor="#FFFFFF" style={{ marginRight: 10 }} onPress={() => {
    //         // Actions.pop(); 
    //     }}>
    //         <Text>SAVE</Text>
    //     </TouchableHighlight>
    // );


    // addLeavesBtn = () => (
    //     <TouchableHighlight onPress={() => Actions[RouteKey.LEAVE_REQUEST]()} underlayColor="#FFFFFF" style={{ marginRight: 10 }} onPress={() => {
    //         // Actions.pop(); 
    //         Actions[RouteKey.LEAVE_REQUEST]()
    //     }}>
    //         {/* <Text>Add Leaves</Text> */}
    //         < Image style={{
    //             width: 40,
    //             height: 40,
    //             alignSelf: 'flex-end',
    //         }} source={require('../assets/leaves/icon-add.png')} />

    //     </TouchableHighlight>
    // );

    // gotoAddAttendance = () => (
    //     <TouchableHighlight onPress={() => Actions[RouteKey.ATTENDANCE_INSERT]()} underlayColor="#FFFFFF" style={{ marginRight: 10 }} onPress={() => {
    //         // Actions.pop(); 
    //         Actions[RouteKey.ATTENDANCE_INSERT]()

    //     }}>
    //         {/* <Text>Add Leaves</Text> */}
    //         < Image style={{
    //             width: 40,
    //             height: 40,
    //             alignSelf: 'flex-end',
    //         }} source={require('../assets/leaves/icon-add.png')} />

    //     </TouchableHighlight>
    // );



    // gotoProfileEditBtn = () => (
    //     <TouchableHighlight onPress={() => Actions[RouteKey.PROFILE_EDIT]()} underlayColor="#FFFFFF" style={{ marginRight: 10 }} onPress={() => {
    //         // Actions.pop(); 
    //         Actions[RouteKey.PROFILE_EDIT]()

    //     }}>
    //         {/* <Text>Add Leaves</Text> */}
    //         < Image style={{
    //             width: 25,
    //             height: 25,
    //             alignSelf: 'flex-end',
    //         }} source={require('../assets/profile/icon-edit.png')} />

    //     </TouchableHighlight>
    // );


    render() {
        return (
            // onRight={() => { }} renderRightButton={this.saveBtnProfileEdit}
            <Router
                navBarButtonColor='#000000'>
                <Scene key="root" >
                    <Scene key={RouteKey.SPLASH} type="reset" component={Splash} initial={true} hideNavBar={true}  ></Scene>
                    <Scene key={RouteKey.LOGIN} type="reset" title="Login" component={Login}  ></Scene>
                    <Scene key={RouteKey.FORGET_PASSWORD} title="Forget Password" component={ForgetPassword}></Scene>
                    <Scene key={RouteKey.SIGNUP} title="Signup" component={SignUp} ></Scene>
                    {/* <Scene key={RouteKey.ATTENDANCE_INSERT} title="Apply Attendance" component={AttendanceInsert} ></Scene>
                    <Scene key={RouteKey.LEAVE_REQUEST} title="Leave Request" component={LeaveRequest} ></Scene>
                    <Scene key={RouteKey.LEAVE_DETAIL} title="Leave Detail" component={LeaveDetail} ></Scene>
                    <Scene key={RouteKey.EXPENSE_ADD} title="Add Expense" component={ExpenseAdd} ></Scene>
                    <Scene key={RouteKey.EXPENSE_DETAIL} title="Expense Detail" component={ExpenseDetail} ></Scene>
                    <Scene key={RouteKey.PAYROLL_DETAIL} title="Pay Slip Detail" component={PayrollDetail} ></Scene> */}



                    {/* <Drawer type="reset" key={RouteKey.SIDEMENU} renderLeftButton={this.sidebarButton} contentComponent={Sidemenu} hideNavBar={true}>
                        <Scene >
                            <Scene key={RouteKey.DASHBOARD} title="Dashboard" component={Dashboard} hideNavBar={true} ></Scene>
                            <Scene key={RouteKey.PROFILE} title="Profile" onRight={() => Actions[RouteKey.PROFILE_EDIT]()} component={Profile} renderRightButton={this.gotoProfileEditBtn}>
                            </Scene>
                            <Scene key={RouteKey.ATTENDANCE} title="Attendace" component={Attendace} onRight={() => Actions[RouteKey.ATTENDANCE_INSERT]()} renderRightButton={this.gotoAddAttendance}></Scene>
                            <Scene key={RouteKey.LEAVES} title="Leaves" component={Leaves} onRight={() => Actions[RouteKey.LEAVE_REQUEST]()} renderRightButton={this.addLeavesBtn}></Scene>
                            <Scene key={RouteKey.EXPENSE} title="Expense" component={Expense} ></Scene>
                            <Scene key={RouteKey.PAYROLL} title="Pay Slip" component={Payroll} ></Scene>
                            <Scene key={RouteKey.NOTIFICATION} title="Notification" component={Notification} ></Scene>


                        </Scene>
                    </Drawer> */}

                </Scene>
            </Router >
        )
    }


}