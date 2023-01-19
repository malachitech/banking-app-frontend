
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader'
import { getUserAccountDetailsAction } from '../../Redux/Actions/UserActions'

// import { StatData } from '../StatData'
function Stats() {
  const  dispatch = useDispatch()

  useEffect(()=> {

    dispatch(getUserAccountDetailsAction())
  }, [ dispatch])
  
const {loading, accountdetails} = useSelector(state => state.getUserDetails)
console.log(accountdetails,  "the userfrom summary")
  
  return (
    
      <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full '>
      {loading && (<Loader />)}

            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Account Balance</p>
                <p className='text-3xl'>{accountdetails? accountdetails.accountBalance: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Account Balance</small>
            </div>

       
            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Account Number</p>
                <p className='text-3xl'>{accountdetails? accountdetails.accountNumber: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Account Number</small>
            </div>

            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Total Credit Transaction</p>
                <p className='text-3xl'>{accountdetails? accountdetails.totalCreditTransactions: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Total Credit Transaction</small>
            </div>

            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Total Debit Transaction</p>
                <p className='text-3xl'>{accountdetails? accountdetails.totalDebitTransactions: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Total Debit Transaction</small>
            </div>

            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Loan Counter</p>
                <p className='text-3xl'>{accountdetails? accountdetails.loanCounter: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Total Applied Loans</small>
            </div>

            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Enrolled cards</p>
                <p className='text-3xl'>{accountdetails? accountdetails.enrolledCards: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Card Counter</small>
            </div>

            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Total Transactions</p>
                <p className='text-3xl'>{accountdetails? accountdetails.totalTransactions: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Transaction Counter</small>
            </div>

            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Total Transfers</p>
                <p className='text-3xl'>{accountdetails? accountdetails.totalTransfers: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Total Transfers</small>
            </div>
      </div>

  )
}

export default Stats