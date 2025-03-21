"use client" // composant éxécuté uniquement coté client

// import useThemeStore from "@/store/themeStore"; // on importe le store global
import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit) 
import { ImEye } from "react-icons/im"; // import eye <ImEye />
import { GiRotaryPhone } from "react-icons/gi"; // import icone tel retro <GiRotaryPhone />
import { AiTwotoneMail } from "react-icons/ai"; // import icone mail  <AiTwotoneMail />
import Image from "next/image"; // import du composant Image
import { useEffect, useState, ChangeEvent, FormEvent } from "react"; // import des hooks React
import Link from "next/link"; // import de Link
import * as Yup from "yup"; // import du schéma de validation de données YUP

export default function ContactPage () {

    // Code pour le THEME avec gestion en LOCAL STORAGE :-------------------------------------------------------------// 

    const [ themeActu , setThemeActu ] = useState<string>(); 

    useEffect (() => {
        const valueLocalStorage = localStorage.getItem("theme"); 
    
        if(valueLocalStorage) {
        setThemeActu(valueLocalStorage);  
        }
      }, [])

    const light = "bg-parchemin text-black"
    const dark = "bg-black text-white"

    //-----------------------------------------------------------------------------------------------------------------//






    // Code pour la GESTION DE l'AFFICHAGE DE L'EMAIL OU DU NUMERO :--------------------------------------------------//

    const [ hidden, setHidden ] = useState<boolean>(true);  // on cree un state qui gere un boolean 

    function switchBooleanHidden() {  // on fait switcher ce boolean pour afficher le numero et le mail
        setHidden(prevState => !prevState); 
    }

    //----------------------------------------------------------------------------------------------------------------//






    // Code pour la GESTION et soumission du FORMULAIRE DE CONTACT  : ----------------------------------------------------//

    interface Contact {   // on type le state contactForm
        nom: string, 
        email: string, 
        telephone: string, 
        message: string 
    }

    const [ contactForm, setContactForm ] =  useState<Contact>({   // on crée le state local pour le state contactForm
        nom: "",   
        email: "", 
        telephone: "", 
        message: ""
    })

    const contactFormSchema = Yup.object().shape({  // on cree un schéma de validation de données YUP pour valider, ou pas, ce qui sera envoyé via l'appel API
        nom: Yup.string()
        .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s\-]+$/, 'Le nom peut contenir des lettres, des espaces et des traits d\'union uniquement') 
        .required('Nom obligatoire'),

      email: Yup.string()
        .email('Email invalide')
        .required('Email obligatoire'),
    
      telephone: Yup.string()
        .optional(), // pas obligatoire, format string (sans validation de format spécifique)
    
      message: Yup.string()
        .required('Message obligatoire')
        .max(500, 'Le message ne peut pas dépasser 500 caractères')
        .matches(/^[\s\S]*$/, 'Le message peut contenir toutes les lettres et caractères spéciaux.') // Accepte tout type de caractères
    })


    function handleInput (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) { // fonction pour gerer les changements d'etats du state contactForm
        
        const { name, value } = event.target;  

        setContactForm ({
            ...contactForm, 
            [name]: value, 
        }) 
    }

    async function submitForm(event: FormEvent <HTMLFormElement>) { // fonction pour gérer la soumission du formulaire 
        event?.preventDefault(); 

        try { // on va tout d'abord valider coté front avec YUP si les données soumises sont correctes
            
            await contactFormSchema.validate (contactForm, { abortEarly: false }); // abortEarly pour collecter toutes les erreurs de validation meme si l'erreur se trouve sur le premie champ (par defaut Yup s'arrete des qu'il rencontre une erreur, donc là avec false, on recup toutes les erreurs)
            console.log("formulaire soumis avec succès", contactForm); 

        } catch (error) {
            if (error instanceof Yup.ValidationError) {// on verifie si l'erreur capturée dans le bloc catch est une erreur de validation YUP et si oui, on éxécute le code ci-apres : 
                const errorMessages = error.inner.map((err) => err.message).join(",\n"); //error.inner est un tableau avec les messages des erreurs, donc on boucle dessus
                alert(errorMessages);// on affiche les erreurs à l'user grace à la fonction alert
            }
        }

        try { 
            const response = await fetch ("/api/contact/email", { // maintenant que les données sont validées car correctes, on fait un appel API au back et on envoie en body le contactForm
                method: "POST", 
                headers: { "Content-Type" : "application/json"}, 
                body: JSON.stringify(contactForm), 
            })
            
            const data = await response.json(); // on recupère la réponse du back dans la constante data
            console.log("reponse du back : ", data.message) // ... et on affiche le message de data

        } catch(error) {
            console.error("erreur lors de l'envoi du formulaire au back : ", error) // si erreur on exécutera ce code 
        }
    }

    //------------------------------------------------------------------------------------------------------------------------//

    return (
        <div
            className={`h-full  ${ themeActu === "light" ? light : dark}`}>

            <p
                className="flex justify-end p-5 text-xl underline font-bangers">
    
                <Link href="/">
                <BsFillCloudFog2Fill
 
                    className="text-3xl mr-1 inline-block"/>
                    EXIT par ici !!!
                    
                </Link>
            </p>

            <h2
                className="text-4xl md:text-6xl w-[90%] mx-auto text-center mb-10 mt-5 font-bangers">
                   Bienvenue en Contact Zone !!! 
            </h2>
            
            <div
                className="w-[80%] mx-auto">

                <h3
                    className="text-3xl font-bangers ">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Interessé(e) pour rentrer en contact ? Voici mes coordonnées :
                </h3>

                <div
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                       <ul
                            className="pl-4 md:pl-8 pt-6">
                                <li
                                    className="">
                                     <GiRotaryPhone 
                                        className="inline-block pr-2 text-3xl"/>
                                        
                                        <ImEye 
                                            className="inline-block text-4xl pr-2"
                                            onClick={switchBooleanHidden}/> 
                                            Clique sur l'oeil pour voir le numéro.

                                        <span
                                            className={`block pt-2 ${ hidden === false ? "": "hidden"}`}>
                                            Téléphone : 06.60.72.79.51
                                        </span>
                                </li>
                                <li
                                    className="pt-8">
                                     <AiTwotoneMail 
                                        className="inline-block pr-2 text-3xl"/>

                                        <ImEye 
                                            className="inline-block text-4xl pr-2"
                                            onClick={switchBooleanHidden}/> 
                                            Clique sur l'oeil pour voir l'adresse mail. 

                                        <span
                                            className={`block pt-2 ${ hidden === false ? "": "hidden"}`}>
                                             Email : aurelieblanc86@gmail.com
                                        </span>  
                                       
                                </li>
                       </ul>
                </div>

                <h3
                    className="text-3xl mt-10 font-bangers mb-10">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                    Si tu préfères remplir un joli formulaire .... alors  voici :  
                </h3>

                <div
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic pb-10">
                       <form
                            className="flex flex-col w-[94%] md:w-[60%] mx-auto"
                            onSubmit={submitForm}>

                            {/* Champ Nom, Prénom */}
                            <label
                                className="pr-3">
                                    Votre nom, prénom : 
                            </label>
                            <input 
                                className="rounded-md mb-5 text-black"
                                value={contactForm.nom}
                                name="nom"
                                onChange={handleInput}
                                required/>
                           

                            {/* Champ Email*/}
                            <label
                                className="pr-3">
                                    Votre Email : 
                            </label>
                            <input 
                                className="rounded-md mb-5 text-black"
                                value={contactForm.email}
                                name="email"
                                onChange={handleInput}
                                required/>

                                 {/* Champ Téléphone*/}
                            <label
                                className="pr-3">
                                    Votre Téléphone : 
                            </label>
                            <input 
                                className="rounded-md mb-5 text-black"
                                value={contactForm.telephone}
                                name="telephone"
                                onChange={handleInput}/>

                                 {/* Champ Message*/}
                            <label
                                className="pr-3">
                                    Votre demande : 
                            </label>
                            <textarea
                                className="rounded-md mb-5 text-black"
                                value={contactForm.message}
                                name="message"
                                onChange={handleInput}
                                maxLength={500}
                                required/>
                           
                           
                            <button
                                className="border-4 rounded-md h-[104px] w-[200px] mx-auto">
                                    <Image
                                        src="/images/boutons/boutonRose.png"
                                        alt="bouton pour valider le formulaire"
                                        width={200}
                                        height={100}
                                    />
                            </button>

                        </form>
                </div>
                
            </div>

        </div>
    )
}