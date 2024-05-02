// InscriptionDialog.js
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
import { useEffect, useState } from "react"

export function InscriptionDialog({ isOpen, onClose }) {

    const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const handleScrollability = () => {
      const documentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      setIsScrollable(documentHeight > windowHeight);
    };

    // Check scrollability initially and on window resize
    handleScrollability();
    window.addEventListener("resize", handleScrollability);

    return () => {
      window.removeEventListener("resize", handleScrollability);
    };
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[100vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-center">Inscription</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-start items-start gap-4">
            <Label htmlFor="company" className="text-right">
              Société
            </Label>
            <Input id="company" className="col-span-3 outline-0" />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <Label htmlFor="contactName" className="text-right">
              Nom du contact
            </Label>
            <Input id="contactName" className="col-span-3 outline-0" />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3 outline-0" />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <Label htmlFor="phone" className="text-right">
              Téléphone
            </Label>
            <Input id="phone" className="col-span-3 outline-0" type="number"/>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <Label htmlFor="region" className="text-right">
              Région
            </Label>
            <Input id="region" className="col-span-3 outline-0" />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <Label htmlFor="username" className="text-right">
              Nom d'utilisateur
            </Label>
            <Input id="username" className="col-span-3 outline-0" />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <Label htmlFor="password" className="text-right">
              Mot de passe
            </Label>
            <Input id="password" className="col-span-3 outline-0" type="password" />
          </div>
        </div>
        <Button>S’inscrire</Button>
      </DialogContent>
    </Dialog>
  )
}
