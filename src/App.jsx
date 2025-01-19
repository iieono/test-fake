import { BiSolidMessageRounded } from "react-icons/bi"
import { FaBell,  FaPhoneAlt, FaUser } from "react-icons/fa"
import { IoMdArrowDropdown, IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"
import { MdMenu } from "react-icons/md"
import { TiArrowUnsorted } from "react-icons/ti"
import LogoImage from './assets/logo.png'
import { useEffect, useState } from "react"
import data from './data.json'


function App() {
  const [question, setQuestion] = useState('')
  const [name, setName] = useState('')
  const [questionData, setQuestionData] = useState(null)
  useEffect(()=>{
    const filteredData = data.filter(item => item.question.toLowerCase().includes(question.toLowerCase()))
    setQuestionData(filteredData.length > 0 ? filteredData[0] : null);
    console.log(questionData)
  },[question])
  return (
    <div className="poppins text-[#f60]">
      <div className="navbar h-14 bg-[#88B77B] flex justify-center text-white">
        <div className="w-9/12 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <MdMenu className="text-4xl" />
            <FaPhoneAlt  />
            <p className="text-lg">Call us : (71) 244 94 64</p>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="outline-none bg-transparent w-80 placeholder-transparent text-transparent" placeholder="Sardorbek Ismayiljon ogli Ne'matov"/>
          </div>
          <div className="flex gap-4 items-center">
            <FaBell  className="text-xl mr-2"/>
            <BiSolidMessageRounded className="text-xl mr-2" />
            <p className="text-lg">{name ? name : 'Sardorbek Ismayiljon ogli Ne\'matov'}</p>
            <FaUser className="text-4xl" />
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
          <div className="h-28 border-b border-black/10 flex justify-center items-center">
            <div className="w-9/12 flex   justify-between items-center">
              <div><img src={LogoImage} alt="logo" /></div>
              <div className="text-xl text-[#f60] font-light">English (en)</div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <div className="border p-5 flex flex-col gap-5 boreder-black/10 ">
              <p className="text-4xl  text-[#f60]">DjangoRest Framework</p>
              <div className="flex gap-3 font-light">
                <p>Dashboard</p>
                <p>/</p>
                <p className="text-[#656565]">My Courses</p>
                <p>/</p>
                <p>django2024 </p>
                <p>/</p>
                <p>General</p>
                <p>/</p>
                <p>YAKUNIY NAZORAT_MASOFA</p>
              </div>
            </div>
            <div className="flex flex-col 2xl:flex-row justify-between  gap-5 w-full h-100">
              <div className="border flex flex-col border-black/10 w-full h-50">
                <div className="flex gap-6 p-5 py-6">
                  <div className="bg-[#DEE2E6] w-[124px] h-48 p-2 px-2 border flex flex-col gap-2 border-black/10">
                    <div className="text-sm font-light">Question <span className="font-semibold text-lg">10</span></div>
                    <div className="text-sm text-[#656565] font-light">Not yet answered</div>
                    <div className="text-sm text-[#656565] font-light">Marked out of 1.00</div>
                    <div className="text-sm text-[#656565] font-light">🚩Remove flag</div>
                  </div>
                  <div className="w-full text-[#656565] p-5 py-3 font-light bg-[#DEF2F8] ">
                    <p className="mb-7">{questionData ? questionData?.question : 'Frontend Freymvork larni korsating'}</p>
                    <div className="text-[#656565]">Select one or more:</div>
                    <div className="p-2 flex flex-col gap-3">
                      {questionData && questionData.answers.map((item, idx)=>(

                        <div className="flex gap-3" key={idx}><input type="checkbox" /> {item}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end p-5 ">
                  <div className="bg-[#88B77B] flex gap-5 text-white font-semibold px-4 py-3"> 
                    <p>Previous page</p>
                    <p>Next page</p>
                  </div>
                </div>
                <div className="flex justify-between font-light items-center p-5 pt-0">
                  <div className="pl-4 font-extralight w-[450px] flex items-start justify-start  text-center">
                    <IoMdArrowDropleft className="text-4xl translate-x-4 -translate-y-2" />
                    <span>1-mavzu Freymvork platformalari bilan ishlash va ularning imkoniyatlari</span>
                  </div>
                  <div className="border text-[#656565]  w-[400px] border-black/10 px-3 py-2 flex items-center justify-between">
                  
                  <input type="text" placeholder="Jump to ..." className="outline-none" value={question} onChange={(e)=>setQuestion(e.target.value)} /> <TiArrowUnsorted />
                  </div>
                  <div className="pr-4 font-extralight flex items-center  justify-end w-[450px] text-end">
                    <span>
                      2-mavzu YII freymvorkiga kirish
                      </span>
                      <IoMdArrowDropright className="text-3xl" />

                  </div>
                </div>
              </div>
              <div className="border border-black/10 w-[520px] h-50">
                <div className="p-4 text-xl font-light">Quiz navigation</div>
                <div className="px-4 py-2 gap-2 text-black font-light text-center pr-10 grid bg-[#F9F9F9] border-t border-black/10 grid-cols-12 2xl:grid-cols-8">
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((num, index) => (
                    <div
                      key={index}
                      className={`h-10 border rounded-[4px] w-full flex border-black items-start justify-center ${
                        num === 10 ? "border-[3px]" : "border"
                      }`}
                    >
                      {num}
                    </div>
                  ))}


                </div>
                <div className="px-4 py-2 font-light bg-[#F9F9F9] text-lg">Finish attempt ...</div>
                <div className="px-4 py-1 pb-4 bg-[#F9F9F9] font-light text-[#656565]">Time left <span className="font-semibold">0:08:48</span></div>

              </div>
            </div>
            <div className="h-screen w-full bg-yellow-400 mt-[30vh]">
              <iframe
                src="https://www.blackbox.ai/"
                title="You.com"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="fullscreen"
              ></iframe>
            </div>

          </div>
    </div>
  )
}

export default App