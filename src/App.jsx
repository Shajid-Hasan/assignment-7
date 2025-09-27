import React, { Suspense, useState } from 'react';
import Navbar from './Components/Component/Navbar/Navbar';
import ProgressBar from './Components/Component/ProgressBar/ProgressBar';
import Card from './Components/Component/Cards/Card';
import TaskStatus from './Components/Component/TaskStatus/TaskStatus';
import Footer from './Components/Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';


const fetchCustomer = async () => {
  const res = await fetch("/Customers.json")
  return res.json();
}

const customerPromise = fetchCustomer();

const App = () => {

  const [progressCount, setProgressCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)


  return (


    <>
      <Navbar></Navbar>
      <ProgressBar progressCount={progressCount} resolvedCount={resolvedCount}></ProgressBar>

      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
        <Card customerPromise={customerPromise} setProgressCount={setProgressCount} progressCount={progressCount} resolvedCount={resolvedCount} setResolvedCount={setResolvedCount}></Card>
      </Suspense>
=      <Footer></Footer>
      <ToastContainer/>
    </>

    
  );
};

export default App;

