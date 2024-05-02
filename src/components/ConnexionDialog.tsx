// ConnexionDialog.js
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { InscriptionDialog } from "./InscriptionDialog"

export function ConnexionDialog() {
  const [isInscriptionDialogOpen, setIsInscriptionDialogOpen] = useState(false)
  const [isConnexionDialogOpen, setIsConnexionDialogOpen] = useState(false)

  const handleConnexionDialogOpen = () => {
    setIsConnexionDialogOpen(true)
  }

  const handleConnexionDialogClose = () => {
    setIsConnexionDialogOpen(false)
  }

  const handleInscriptionDialogOpen = () => {
    setIsConnexionDialogOpen(false) // Close ConnexionDialog
    setIsInscriptionDialogOpen(true) // Open InscriptionDialog
  }

  const handleInscriptionDialogClose = () => {
    setIsInscriptionDialogOpen(false)
  }

  return (
    <>
      {/* Connexion button */}
      <Button onClick={handleConnexionDialogOpen} className="bg-white text-black hover:text-white border-[1px] border-solid border-black">Connexion</Button>

      {/* Inscription button */}
      <Button onClick={handleInscriptionDialogOpen}>Inscription</Button>

      {/* Connexion Dialog */}
      <Dialog open={isConnexionDialogOpen} onOpenChange={setIsConnexionDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Connexion</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Nom d'utilisateur
              </Label>
              <Input id="name" className="col-span-3 outline-0" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Mot de passe
              </Label>
              <Input id="name" className="col-span-3 outline-0" type="password" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button className="px-16">Connexion</Button>
            <Label className="font-bold">Mot de passe oublié ?</Label>
          </div>
          <Separator />
          {/* Inscrire button */}
            <Button onClick={handleInscriptionDialogOpen} className="">Inscrire</Button>
        </DialogContent>
      </Dialog>
      {/* Inscription Dialog */}
      <InscriptionDialog isOpen={isInscriptionDialogOpen} onClose={handleInscriptionDialogClose} />
    </>
  )
}
