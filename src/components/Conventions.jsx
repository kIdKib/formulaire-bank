import React, { useEffect, useState } from "react";
import StepLoader from "./StepLoader";

//Configuration dropdown
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FaAngleLeft, FaAngleRight, } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
//Configuration dropdown


//Configuration modal
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
//Configuration modal



function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
}


const Convention = () => {

    let ElementConverted
    let element = []

    const location = useLocation()
    const locationData = location.state

    const [elementData, setElementData] = useState([])

    //Configuration dropdown
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value)

    const {register, handleSubmit} = useForm()
    //Configuration dropdown
    

    //Configuration modal
    const [openModal, setOpenModal] = React.useState(false);

 

    const handleOpenModal = () => {
        const checkbox = document.getElementById('checkbox')
        if (checkbox.checked) {
            setOpenModal(!openModal);
        }





        for (let i = 0; i < locationData.length; i++) {
            if (i == 0 ) {
                element['pays'] = locationData[i] ;
                
            } else if (i == 1) {
                element['user_type'] = locationData[i][0][0] ;
            } else if (i >= 41 && element['user_type'] == 'user') {
                if (i == 41) {
                    element['pack'] = locationData[i] ;
                } else if (i == 42) {
                    element['type_pack'] = locationData[i] ;
                }
            } else {
                element[locationData[i][0]] = locationData[i][1] ;
            }
        }

        ElementConverted = element

        
        setElementData(element)
        
    }

    

    useEffect(() => {
        if (elementData.length !== undefined) {

            let obj = Object.assign({}, elementData);
            
            if (typeof obj != undefined) {
                console.log(obj);
                if(elementData['user_type'] == 'user') {const resultatEnvoi = fetch('http://localhost:8000/api/users', {
                        method: "POST", 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(obj)
                    })
                    resultatEnvoi

                } else if (elementData['user_type'] == 'company') {const resultatEnvoi = fetch('http://localhost:8000/api/companies', {
                        method: "POST", 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(obj)
                    })
                    resultatEnvoi
                }
            }
        }
        
    }, [elementData])
    
    //Configuration modal

 
    return ( <div className="w-1/3 px-4 border">

        <StepLoader texte={'Lecture des conventions'} niv={100} />
        <p className="my-5 p-3 bg-black text-white" >
            Il est nécessaire que vous preniez connaissances des 
            clauses et conventions liés aux comptes et packages.
        </p>

        <div className="h-[70vh] overflow-scroll scroll">
            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
                <AccordionHeader onClick={() => handleOpen(1)} className={open===1 ? 'bg-orange-900 text-white p-3 hover:text-white' : ''}>Convention compte courant</AccordionHeader>
                <AccordionBody>
                    <div className="mb-5">
                        <h4 className="pb-1 text-lg">- Information Documentation</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Lacus 
                            cras tortor tellus in gravida. Tellus sed enim donec 
                            elit morbi ornare leo aliquet nulla. Nec euismod in massa 
                            cursus fames nec morbi odio. Iaculis mi proin a 
                            amet porttitor consectetur vestibulum a. 
                        </p>
                    </div>
                    <div className="mb-5">
                    <h4 className="pb-1 text-lg">- Du libellé des chèques</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Lacus cras tortor tellus in gravida. Tellus sed enim donec 
                            elit morbi ornare leo aliquet nulla. Nec euismod in massa cursus fames nec 
                            morbi odio. Iaculis mi proin a amet porttitor consectetur 
                            vestibulum a. Elit magna commodo quam aliquam et massa donec ultrices. 
                            Cras adipiscing varius purus vel semper urna turpis tortor sit. Sed 
                            et quis euismod dolor cursus sed tellus. Fermentum pretium lacus egestas 
                            dolor pulvinar donec. 
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="pb-1 text-lg">- Des Oppositions à paiement</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Lacus 
                            cras tortor tellus in gravida. Tellus sed enim 
                            donec elit morbi ornare leo aliquet nulla. Sed et quis euismod dolor cursus sed tellus.
                        </p>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)} className={open===2 ? 'bg-orange-900 text-white p-3 hover:text-white' : ''}>
                    Convention Bridgenet
                </AccordionHeader>
                <AccordionBody>
                    <div className="mb-5">
                        <h4 className="pb-1 text-lg">- Information Documentation</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Lacus 
                            cras tortor tellus in gravida. Tellus sed enim donec 
                            elit morbi ornare leo aliquet nulla. Nec euismod in massa 
                            cursus fames nec morbi odio. Iaculis mi proin a 
                            amet porttitor consectetur vestibulum a. 
                        </p>
                    </div>
                    <div className="mb-5">
                    <h4 className="pb-1 text-lg">- Du libellé des chèques</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Lacus cras tortor tellus in gravida. Tellus sed enim donec 
                            elit morbi ornare leo aliquet nulla. Nec euismod in massa cursus fames nec 
                            morbi odio. Iaculis mi proin a amet porttitor consectetur 
                            vestibulum a. Elit magna commodo quam aliquam et massa donec ultrices. 
                            Cras adipiscing varius purus vel semper urna turpis tortor sit. Sed 
                            et quis euismod dolor cursus sed tellus. Fermentum pretium lacus egestas 
                            dolor pulvinar donec. 
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="pb-1 text-lg">- Des Oppositions à paiement</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Lacus 
                            cras tortor tellus in gravida. Tellus sed enim 
                            donec elit morbi ornare leo aliquet nulla. Sed et quis euismod dolor cursus sed tellus.
                        </p>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)} className={open===3 ? 'bg-orange-900 text-white p-3 hover:text-white' : ''}>
                    Convention packages choisis
                </AccordionHeader>
                <AccordionBody>
                    <div className="mb-5">
                        <h4 className="pb-1 text-lg">- Information Documentation</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Lacus 
                            cras tortor tellus in gravida. Tellus sed enim donec 
                            elit morbi ornare leo aliquet nulla. Nec euismod in massa 
                            cursus fames nec morbi odio. Iaculis mi proin a 
                            amet porttitor consectetur vestibulum a. 
                        </p>
                    </div>
                    <div className="mb-5">
                    <h4 className="pb-1 text-lg">- Du libellé des chèques</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Lacus cras tortor tellus in gravida. Tellus sed enim donec 
                            elit morbi ornare leo aliquet nulla. Nec euismod in massa cursus fames nec 
                            morbi odio. Iaculis mi proin a amet porttitor consectetur 
                            vestibulum a. Elit magna commodo quam aliquam et massa donec ultrices. 
                            Cras adipiscing varius purus vel semper urna turpis tortor sit. Sed 
                            et quis euismod dolor cursus sed tellus. Fermentum pretium lacus egestas 
                            dolor pulvinar donec. 
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="pb-1 text-lg">- Des Oppositions à paiement</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Lacus 
                            cras tortor tellus in gravida. Tellus sed enim 
                            donec elit morbi ornare leo aliquet nulla. Sed et quis euismod dolor cursus sed tellus.
                        </p>
                    </div>
                </AccordionBody>
            </Accordion>

            <div className="w-full mt-5 text-center">
                <input type="checkbox" name="" id="checkbox"/>
                <label htmlFor="" className="ml-1">J’ai lu et j’accepte les termes et conditions</label>
            </div>
        </div>





        <div  onClick={handleOpenModal} className="flex justify-center items-center bg-black">
            <button className="flex items-center justify-center p-2 m-3 text-white bg-orange-900 w-[90%]" >
                Confirmer la soumission
            </button>
            
        </div>



        <Dialog open={openModal} handler={handleOpenModal} className="flex flex-col items-center">
            <DialogHeader>
                <div style={{fontSize:"100px"}}>
                    <IoDocumentTextSharp/>
                </div>
            </DialogHeader>
            <DialogBody>
                <p className="text-3xl text-center">
                    Votre formulaire de pré inscription
                    a été soumis avec succès!
                </p>
                <p className="mt-12 text-center">
                    Un de nos agents vous contactera.
                </p>
            </DialogBody>
            <DialogFooter>
                {/* <Button
                    variant="text"
                    color="red"
                    onClick={handleOpenModal}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpenModal}>
                    <span>Confirm</span>
                </Button> */}
            </DialogFooter>
      </Dialog>





















        
    </div> );
}

 
export default Convention;