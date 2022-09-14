/* library */
import Head from "next/head";
import { useState } from "react";
/* components */
import Input from "@components/Input";
import { InitialSlide } from "@components/Animation";
/* constants */
import { SITE_META_DATA } from "@constants/constant";

function Calculator() {

  const [cal, setCal] = useState({
    amount: "",
    interest: "",
    tenure: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCal(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const calculateEMI = ({
    principalAmount = 0,
    rateOfInterest = 0,
    totalTenureInMonths = 0
  }) => {


    if (principalAmount && rateOfInterest && totalTenureInMonths && principalAmount > 1 && rateOfInterest > 1 && totalTenureInMonths > 1) {
      const monthlyInterestRate = rateOfInterest / 12 / 100
      const emi = principalAmount * monthlyInterestRate * ((Math.pow((1 + monthlyInterestRate), totalTenureInMonths)) / (Math.pow((1 + monthlyInterestRate), totalTenureInMonths - 1)))
      return Math.ceil(emi)
    }
    return 0
  }

  const calculateInterest = () => {
    const totalInterest = calculateEMI({
      principalAmount: cal?.amount,
      rateOfInterest: cal?.interest,
      totalTenureInMonths: cal?.tenure,
    }) * cal?.tenure
    return totalInterest
  }

  const calculatePayable = () => {
    return parseInt(cal?.amount) + parseInt(calculateInterest())
  }

  return (
    <>
      <main className="main-wrapper static calculator">
        <Head>
          <title>{SITE_META_DATA.LOAN_CALCULATOR['title']}</title>
          <meta
            name={SITE_META_DATA.LOAN_CALCULATOR['name']}
            content={SITE_META_DATA.LOAN_CALCULATOR['description']}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
          <div className="static__title">{title}</div>
          <InitialSlide>
            <div>
              <form className='common-form'>
                <Input onChange={handleInputChange} autoFocus={true} value={cal?.amount} min="1" required className='common-form-input' type="number" id="amount" name="amount" placeholder='Total Amount e.g. 3000000' />
                <Input onChange={handleInputChange} value={cal?.interest} min="1" required className='common-form-input' type="number" id="interest" name="interest" placeholder='Interest Rate e.g. 7.8' />
                <Input onChange={handleInputChange} value={cal?.tenure} min="1" required className='common-form-input' type="number" id="tenure" name="tenure" placeholder='Tenure e.g 8 Months' />
              </form>
              <div className="cal__result">
                <div className="cal__result-child">
                  <span>Monthly Loan EMI:</span><span>{calculateEMI({
                    principalAmount: cal?.amount,
                    rateOfInterest: cal?.interest,
                    totalTenureInMonths: cal?.tenure,
                  }) || 0}</span>
                </div>
                <div className="cal__result-child">
                  <span>Principal Amout:</span><span>{cal?.amount || 0}</span>
                </div>
                <div className="cal__result-child">
                  <span>Total Interest Amount:</span><span>{calculateInterest() || 0}</span>
                </div>
                <div className="cal__result-child">
                  <span>Total Payable Amount:</span><span>{calculatePayable() || 0}</span>
                </div>
              </div>
            </div>
          </InitialSlide>
        </div>
      </main>
    </>
  );
}

const title = "Loan Calculator";
export default Calculator;
export async function getStaticProps() {
  return {
    props: {},
  };
}
