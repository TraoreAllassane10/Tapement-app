import { z } from "zod";

export const editProfileSchema = z.object({
  nom: z.string().min(1, "Entrer votre nom"),
  prenom: z.string().min(1, "Entrer votre prenom"),
  telephone: z.string().min(8, "Entrer un numero valide"),
  email: z.string().email("Entrer un e-mail valide"),
  niveau: z.string().min(1, "Enter votre niveau d'etude"),
  sport: z.string().min(1, "Entrer votre sport préféré"),
  equipe: z.string().min(1, "Entrer votre equipe préférée"),
  artiste: z.string().min(1, "Entrer votre artiste préféré"),
});

export type EditProfileData = z.infer<typeof editProfileSchema>;
