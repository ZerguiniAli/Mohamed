import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

interface InscriptionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InscriptionDialog({ isOpen, onClose }: InscriptionDialogProps) {
  const [societe, setSociete] = useState("");
  const [Non, setNon] = useState("");
  const [Email, setEmail] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Region, setRegion] = useState("");
  const [Nomutil, setNomutil] = useState("");
  const [MotdePase, setMotdePase] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      societe,
      Non,
      Email,
      Telephone,
      Region,
      Nomutil,
      MotdePase,
    };

    try {
      const res = await fetch('http://localhost:3000/api/Inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        setMessage('User created successfully!');
        // Clear form fields
        onClose();
        toast.success("Inscription réussie");
      } else {
        const errorResult = await res.json();
        setMessage(errorResult.error || 'Something went wrong');
      }
    } catch (error) {
      setMessage('An error occurred');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[100vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-center">Inscription</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="company" className="text-right">
                Société
              </Label>
              <Input id="company" value={societe} onChange={(e) => setSociete(e.target.value)} className="col-span-3 outline-0" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="contactName" className="text-right">
                Nom du contact
              </Label>
              <Input id="contactName" value={Non} onChange={(e) => setNon(e.target.value)} className="col-span-3 outline-0" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="col-span-3 outline-0" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="phone" className="text-right">
                Téléphone
              </Label>
              <Input id="phone" value={Telephone} onChange={(e) => setTelephone(e.target.value)} className="col-span-3 outline-0" type="number" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="region" className="text-right">
                Région
              </Label>
              <Input id="region" value={Region} onChange={(e) => setRegion(e.target.value)} className="col-span-3 outline-0" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="username" className="text-right">
                Nom d'utilisateur
              </Label>
              <Input id="username" value={Nomutil} onChange={(e) => setNomutil(e.target.value)} className="col-span-3 outline-0" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <Label htmlFor="password" className="text-right">
                Mot de passe
              </Label>
              <Input id="password" value={MotdePase} onChange={(e) => setMotdePase(e.target.value)} className="col-span-3 outline-0" type="password" />
            </div>
          </div>
          <Button type="submit">S’inscrire</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
