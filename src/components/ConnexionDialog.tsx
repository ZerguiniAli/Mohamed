import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { InscriptionDialog } from "./InscriptionDialog";
import toast from "react-hot-toast";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

export function ConnexionDialog() {
  const [isInscriptionDialogOpen, setIsInscriptionDialogOpen] = useState<boolean>(false);
  const [isConnexionDialogOpen, setIsConnexionDialogOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleConnexionDialogOpen = () => {
    setIsConnexionDialogOpen(true);
  };

  const handleConnexionDialogClose = () => {
    setIsConnexionDialogOpen(false);
  };

  const handleInscriptionDialogOpen = () => {
    setIsConnexionDialogOpen(false); // Close ConnexionDialog
    setIsInscriptionDialogOpen(true); // Open InscriptionDialog
  };

  const handleInscriptionDialogClose = () => {
    setIsInscriptionDialogOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email: username,
      password: password,
    });

    // Handle the result of the sign-in operation
    if (result?.error) {
      console.error(result.error);
      toast.error("Échec de la connexion. Veuillez vérifier vos identifiants.");
      // Display an error message to the user
    } else {
      console.log("Sign-in successful");
      toast.success("Connexion réussie !");
      handleConnexionDialogClose(); // Close the dialog
      // Optionally, redirect the user or perform additional actions
    }
  };

  return (
    <>
      {/* Connexion button */}
      <Button
        onClick={handleConnexionDialogOpen}
        className="bg-white text-black hover:text-white border-[1px] border-solid border-black"
      >
        Connexion
      </Button>
      {/* Inscription button */}
      <Button onClick={handleInscriptionDialogOpen}>Inscription</Button>
      {/* Connexion Dialog */}
      <Dialog open={isConnexionDialogOpen} onOpenChange={setIsConnexionDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Connexion</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="username" className="text-right">
                Nom d'utilisateur
              </Label>
              <Input
                id="username"
                className="col-span-3 outline-0"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="password" className="text-right">
                Mot de passe
              </Label>
              <Input
                id="password"
                className="col-span-3 outline-0"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <Button type="submit" className="px-16">
                Connexion
              </Button>
              <Label className="font-bold">Mot de passe oublié ?</Label>
            </div>
            <Separator />
            <Button onClick={handleInscriptionDialogOpen} className="">
              Inscrire
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {/* Inscription Dialog */}
      <InscriptionDialog isOpen={isInscriptionDialogOpen} onClose={handleInscriptionDialogClose} />
    </>
  );
}
