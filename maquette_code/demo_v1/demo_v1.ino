//Arduino pins are assigned a variable and a number
  #define buttonpin 13
  #define led 11
  #define led2 10
  #define led3 9
  #define led4 8
  #define led5 7
  int buttonState = 0; //Starting state of the button is declared here

//Pins are declared as input or output
  void setup(){
  pinMode(ledPin, ledPin2, ledPin3, ledPin4, ledPin5 OUTPUT); //LED-pins are declared as output
  pinMode(buttonPin, INPUT); //Button-pin is declared as output
}

// Lights turn on when button pressed

void loop()
{
  //check button press here, unpressed is 0, pressed is 255
  if(digitalRead(buttonPin) == LOW)
  {
     if(buttonstate == 0)
     {
         buttonstate = 255;
     }
     else
     {
         buttonstate = 0;
     }
  }

  if(buttonstate > 0)
  {
     digitalWrite(led,led2,led3,led4,led5 HIGH);
     delayMicroseconds(3000000);
     digitalWrite(led,led2,led3,led4,led5);
  }
