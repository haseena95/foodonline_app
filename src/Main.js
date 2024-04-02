import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom"
import Header from "./Header";
import Reservation from "./Reservation";
import ConfirmReservation from "./ConfirmReservation";


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
    const availableTimes = ["Lunch", "Dinner"];

    const submitData = (formData) => {
        return true;

    }
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
                <Route path="/reservation" element={<Reservation availableTimes={availableTimes}
                    submitForm={submitForm} />}></Route>
                <Route path="/confirmed" element={<ConfirmReservation />}></Route>
            </Routes>
        </main>
    );

}

export default Main;