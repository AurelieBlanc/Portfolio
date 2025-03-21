import type { NextApiRequest, NextApiResponse } from "next"; // import des types
import nodemailer from "nodemailer"; // import de nodemailer
import * as Yup from "yup"; // import du schéma de validation de données YUP


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


export default async function handlerEmail (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(405).json({ message: "methode HTTP non autorisée"})
    }

    const formData = req.body; 

     try { // on va tout d'abord valider coté front avec YUP si les données soumises sont correctes
                
        await contactFormSchema.validate (formData, { abortEarly: false }); // abortEarly pour collecter toutes les erreurs de validation meme si l'erreur se trouve sur le premie champ (par defaut Yup s'arrete des qu'il rencontre une erreur, donc là avec false, on recup toutes les erreurs)
        console.log("formulaire soumis avec succès", formData); 
    
        } catch (error) {
                console.error(error); 
                return res.status(400).json({ message: error}) 
        }
    
        const { nom, email, telephone, message } = formData; 

    if(!process.env.EMAIL_USER) {
        throw new Error ("process.env.EMAIL_USER pas défini !")
    }; 

    if(!process.env.EMAIL_PASS) {
        throw new Error ("process.env.EMAIL_PASS pas défini !")
    }; 

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            }, 
        }); 

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

        await transporter.sendMail(mailOptions); 

        return res.status(200).json({ message: "Email envoyé avec succès !"})

        } catch(error) {
        console.error("error : ", error)
        return res.status(500).json({ message: "Erreur lors de l'envoi de l'email"}); 
       
    }
}; 
