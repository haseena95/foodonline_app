import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"
import Header from "./Header";
import ConfirmedBooking from "./ConfirmedBooking";
import BookingPage from "./BookingPage";






/**
 *  Generate random time 
 * 
 * const generateRandom = function(seed){
 *     var m = 2**35 - 31;
 *     var a=  185852;
 *      var s =  seed % m;
 *      return function(){
 *        return (s = s * a % m) / m;
 *      }
 * 
 * }
 * 
 * const fetchTime =  function(date){
 *    int result=[];
 *    int random = generateRandom(date.getDate());
 *      for(let i = 17; i< <=23 ; i++) {
 *          if(random() < 0.5){
 *              result.push(i+ ':00');
 *          }
 *          if(random() > 0.5){
 *              result.push(i+ ':30');
 *          }
 *      }
 *      return result;
 * }
 * 
 * 
 */
const Main = (props) => {

    //useScript("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js")

    const getTime = (date) => {

        let result = []
        let random = generateRandomTime(new Date(date));
        for (let i = 17; i <= 22; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');

            }
            if (random() > 0.5) {
                result.push(i + ':30');
            }
        }

        return result;

    }

    const generateRandomTime = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        }

    }

    const initializeState = getTime(new Date());
    // const initializeState = { availableTimes: window["fetchAPI"](new Date()) }


    const submitData = (formData) => {
        return true;

    }

    const updateTimes = (state, date) => {
        return getTime(date);
        //return { state: window["fetchAPI"](date) };
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeState)
    const navigate = useNavigate();
    const submitForm = (formData) => {
        if (submitData(formData)) {
            navigate("/confirmed");
        }

    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />}></Route>
                <Route path="/reservation" element={<BookingPage dispatch={dispatch} availableTimes={availableTimes}
                    submitForm={submitForm} />}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    );

}

export default Main;