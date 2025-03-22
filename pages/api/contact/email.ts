// Code pour les IMPORTS : -------------------------------------------------------------------------------------------------------------------------------//

import type { NextApiRequest, NextApiResponse } from "next"; // import des types
import nodemailer from "nodemailer"; // import de nodemailer pour l'envoi des infos du formulaire par email
import * as Yup from "yup"; // import du schéma de validation de données YUP

//--------------------------------------------------------------------------------------------------------------------------------------------------------//




// Code pour le schéma de validation de données YUP : ------------------------------------------------------------------------------------------------------//

 const contactFormSchema = Yup.object().shape({
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

//---------------------------------------------------------------------------------------------------------------------------------------------------------//





export default async function handlerEmail (req: NextApiRequest, res: NextApiResponse) {
  
//si la méthode de la requête n'est pas POST, on stoppe le code avec un return: 
    if(req.method !== "POST") { 
        return res.status(405).json({ message: "methode HTTP non autorisée"})
    }



//on récupère tout l'objet envoyé en body dans une constante formData: 
const formData = req.body; 



// ON VALIDE les données AUSSI coté back, si les données transmises sont correctes, sinon on stoppe le code dans un catch error :----------------------------------------//
     try { 
                
        await contactFormSchema.validate (formData, { abortEarly: false }); // abortEarly pour collecter toutes les erreurs de validation meme si l'erreur se trouve sur le premie champ (par defaut Yup s'arrete des qu'il rencontre une erreur, donc là avec false, on recup toutes les erreurs)
        console.log("formulaire soumis avec succès", formData); 
    
        } catch (error) {
                console.error(error); 
                return res.status(400).json({ message: error}) 
        }
//-----------------------------------------------------------------------------------------------------------------------------------------------------//
    



// on récupère les différentes propriétés de l'objet formData: 
    const { nom, email, telephone, message } = formData; 



// CODE pour vérifier que les variables d'environnement soient bien définies pour eviter des erreurs:------------------------------------------------------------//
    if(!process.env.EMAIL_USER) {
        throw new Error ("process.env.EMAIL_USER pas défini !")
    }; 

    if(!process.env.EMAIL_PASS) {
        throw new Error ("process.env.EMAIL_PASS pas défini !")
    };
//----------------------------------------------------------------------------------------------------------------------------------------------------------------//




// CODE pour l'envoi de l'email grace à nodemailer avec les infos recueillies dans formData :-----------------------------------------------------------------------//

try {  // création du transporteur nodeMailer avec les paramètres d'authentification Gmail:
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            }, 
        }); 

        // là on définit ce que l'on veut dans le contenu de l'email :
        const mailOptions = {
            from: process.env.EMAIL_USER, 
            to: process.env.EMAIL_USER, 
            subject: "Nouveau message de Contact PRO VIA PORTFOLIO", 
            text: 
            `Voici les infos pour la demande faite via le Portfolio : 
                nom: ${nom}, 
                email: ${email}, 
                telephone: ${telephone}, 
                message: ${message}`
        }; 

        // envoi l'email de manière asynchrone (cad que le programme ne bloque pas l'éxécution en attendant la réponse de l'envoi de l'email)
        await transporter.sendMail(mailOptions); 

        // si l'envoi réussit alors on retourne un status 200 indiquant que la requete a été éxécutée avec succès :
        return res.status(200).json({ message: "Email envoyé avec succès !"})

        } catch(error) { // si requete pas ok on déclenche une erreur :
        console.error("error : ", error)
        return res.status(500).json({ message: "Erreur lors de l'envoi de l'email"}); 
       }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

}; 
