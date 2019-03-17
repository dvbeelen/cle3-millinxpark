int led1 = 10;
int led2 = 9;
int led3 = 11;
int led4 = 7;
int led5 = 6;
int button = 4;

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
 digitalWrite(led1,HIGH);
  delay(500);
 digitalWrite(led1,LOW);
  delay(500);
 digitalWrite(led2,HIGH);
  delay(500);
 digitalWrite(led2,LOW);
  delay(500);
 
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
