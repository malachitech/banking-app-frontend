import React, {useState} from 'react'
/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'
import TransferForm from './Form'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

const steps = [
  { id: '01', name: 'Beneficiary Account Details', description: 'Bank Name, Account Name...', status: 'current' },
  { id: '02', name: 'Confirm Tranfer', description: '', href: '/', status: '' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function FundtransferForm() {

    const [form, showForm] = useState(true)
    const [confirm, showconfirm] = useState(false)
  const navigate  = useNavigate()
    const checkConfirm = ()  => {
        showForm(false)
        showconfirm(true)
        steps[0].status = "complete"
        steps[1].status = "current"
    }

    const confirmTransfer = ()  => {
        showForm(true)
        showconfirm(false)
        steps[0].status = "current"
        steps[1].status = ""

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Transfer Successfull.`,
          showConfirmButton: false,
          timer: 2500
        })

        navigate('/customer/viewtransfer')
    }

    // if(form){
    //     steps[0].status = "Current"
    //     steps[1].status = ""
    //     console.log("I am planning", steps[0], form)
    // }
    
    // if(confirm === true){
    //     steps[0].status = ""
    //     steps[0].status = "Current"
    // }
  return (
    <div className="lg:border-t lg:border-b lg:border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
        <ol
          className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
                  stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
                  'border border-gray-200 overflow-hidden lg:border-0'
                )}
                
              >
                {step.status === 'complete' ? (
                  <div className="group">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex items-start text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full">
                          <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </div>
                ) : step.status === 'current' ? (
                  <div aria-current="step">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex items-start text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                          <span className="text-indigo-600">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold text-indigo-600 tracking-wide uppercase">
                          {step.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </div>
                ) : (
                  <a href={step.href} className="group">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex items-start text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                          <span className="text-gray-500">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </a>
                )}

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div className="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 12 82"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <div>
        <TransferForm form={form} confirm={confirm} checkConfirm={checkConfirm} confirmTransfer={confirmTransfer} />
      </div>
    </div>
  )
}


export default FundtransferForm