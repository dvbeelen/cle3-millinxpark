int led1 = 8;
int led2 = 9;
int led3 = 10;
int led4 = 11;
int led5 = 12;
int button = 4;
int buttonPressed = 0;

/*Leds assigned to pins */
void setup()
{
  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);
  pinMode(led3,OUTPUT);
  pinMode(led4,OUTPUT);
  pinMode(led5,OUTPUT);
  pinMode(button,INPUT);
}


/*Leds blink one by one */
void loop(){
  if(buttonPressed == 1) { // button has never been pressed
    // detect button press
   int buttonState = digitalRead(button);
  } else { // button has been pressed, do this instead
  digitalWrite(led1,HIGH);
    delay(500);
  digitalWrite(led1,LOW);
    delay(500);
  digitalWrite(led2,HIGH);
    delay(500);
  digitalWrite(led2,LOW);
    delay(500);
  digitalWrite(led2,HIGH);
    delay(500);
  digitalWrite(led2,LOW);
    delay(500);
  digitalWrite(led4,HIGH);
    delay(500);
  digitalWrite(led4,LOW);
    delay(500);
  digitalWrite(led5,HIGH);
    delay(500);
  digitalWrite(led5,LOW);
    delay(500);
  }
}

/*
 * Button controlled LEDS
void loop()
{
  if (digitalRead(button) == HIGH){
    digitalWrite(led, HIGH);
  }
  else{
    digitalWrite(led,LOW);
  }
  
}
*/
