/* START
 *  Druksensor registreert persoon aanwezigheid
 *  Arduino gaat aan
 *  LEDs en geluid gaan aan om aan te geven dat het aanstaat
 *  
 *  API
 *  - Toevoegen nummer halen uit API
 *  - Kies een van de vijf nummers op telefoon
 *  - QR codes
 *  
 *  WERKING
 *  Aftellen - Licht
 *  Eerste ronde - LED gaat aan
 *  Gebruiker gaat naar druksensorplaat bij de blomepot
 *  LED gaat aan in knipperen in een van de bloempotten, geeft aan dat de gebruiker daar straks heen moet
 *  LED blijven 10 sec. aan
 *  LED gaan weer knipperen
 *  
 *  EINDE
 *  Als speler LEDS niet bereikt gaan ze uit en is het game over. 
 *  Anders duurt het nummer een minuut lang. 
 *  -Speler krijgt score
 *  -Nummer speelt opnieuw af na het spelen, als je noten mist dan hoor je dat daara terug ] 
 */

#define T_C 262
#define T_D 294
#define T_E 330
#define T_F 349
#define T_G 392
#define T_A 440
#define T_B 493

const int C = 10;
const int D = 9;
const int E = 8;
const int F = 7;
const int G = 6;
const int A = 5;
const int B = 4;

const int Buzz = 11;
const int Red = 13;
const int Blue = 3;
const int Green = 2;

void setup()
{
  pinMode(Red, OUTPUT);
  pinMode(Blue, OUTPUT);
  pinMode(Green, OUTPUT);
  pinMode(C, INPUT);
  digitalWrite(C,HIGH);
  
  pinMode(D, INPUT);
  digitalWrite(D,HIGH);
  
  pinMode(E, INPUT);
  digitalWrite(E,HIGH);
  
  pinMode(F, INPUT);
  digitalWrite(F,HIGH);
  
  pinMode(G, INPUT);
  digitalWrite(G,HIGH);
  
  pinMode(A, INPUT);
  digitalWrite(A,HIGH);
  
  pinMode(B, INPUT);
  digitalWrite(B,HIGH);


//  digitalWrite(LED,LOW);
}

void loop()
{
  while(digitalRead(C) == LOW)
  {
    tone(Buzz,T_C);
    digitalWrite(Red,HIGH);
    delay(500);
    digitalWrite(Red,LOW);
  }

  while(digitalRead(C) == LOW)
  {
    tone(Buzz,T_D);
    digitalWrite(Blue,HIGH);
    delay(500);
    digitalWrite(Blue,LOW);
  }

  while(digitalRead(E) == LOW)
  {
    tone(Buzz,T_E);
    digitalWrite(Green,HIGH);
    delay(500);
    digitalWrite(Green, LOW);
  }

  while(digitalRead(F) == LOW)
  {
   tone(Buzz,T_F);
   digitalWrite(Green,HIGH);
   delay(500);
   digitalWrite(Green, LOW);
  }

  while(digitalRead(G) == LOW)
  {
    tone(Buzz,T_G);
    digitalWrite(Green,HIGH);
    delay(500);
    digitalWrite(Green, LOW);
  }

  while(digitalRead(A) == LOW)
  {
    tone(Buzz,T_A);
    digitalWrite(Green,HIGH);
    delay(500);
    digitalWrite(Green, LOW);
  }

  while(digitalRead(B) == LOW)
  {
    tone(Buzz,T_B);
    digitalWrite(Green,HIGH);
    delay(500);
    digitalWrite(Green, LOW);
  }

 noTone(Buzz);
}
