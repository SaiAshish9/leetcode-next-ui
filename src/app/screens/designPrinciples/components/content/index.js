import { Editor } from "@/common";
import React from "react";
import { Container, Text } from "./styles";

const textContent = [
  {
    text: (
      <>
        <Text>
          SOLID principles are object-oriented design concepts relevant to
          software development.
        </Text>
        <Text>
          Principles are best practices to follow to allow scalable architecture
          and software craftmanship.
        </Text>
        <Text>
          Design patterns are techniques about how to do the design and
          architect your code.
        </Text>
        <Text>
          Each design pattern has a different use case and is applicable to a
          different scenario.
        </Text>
      </>
    ),
  },
  {
    text: (
      <>
        <Text>
          SOLID is a structured design approach that ensures your software is
          modular and easy to maintain, understand, debug, and refactor.
          Following SOLID also helps save time and effort in both development
          and maintenance. SOLID prevents your code from becoming rigid and
          fragile, which helps you build long-lasting software.
        </Text>
      </>
    ),
  },
  {
    text: <></>,
  },
  {
    text: (
      <>
        <Text m>Single Responsibility Principle (SRP)</Text>
        <Text>
          Every class in Java should have a single job to do. To be precise,
          there should only be one reason to change a class.
        </Text>
        <Text>
          Each class should be responsible for a single part or functionality of
          the system.
        </Text>
        <Text>Example 1:</Text>
        <Editor
          height={"8.5rem"}
          value={`public class Task {
   public void downloadFile(String location);
   public void parseTheFile(File file);
   public void persistTheData(Data data);
}`}
        />
        <Text>
          we can't reuse above code anywhere else and hence it doesn't meet
          single responsibility principle.
        </Text>
        <Text>Example 2:</Text>
        <Editor
          height={"8.5rem"}
          value={`public class Employee {
   public Money calculatePay()
   public String reportHours()
   public void save()
}
`}
        />
        <Text>This is also a class with multiple responsibilities.</Text>
        <Text>Example 3:</Text>
        <Editor
          height={"8.5rem"}
          value={`public class Vehicle {
   public void printDetails() {}
   public double calculateValue() {}
   public void addVehicleToDB() {}
}`}
        />
        <Text>
          The Vehicle class has three separate responsibilities: reporting,
          calculation, and database. By applying SRP, we can separate the above
          class into three classes with separate responsibilities.
        </Text>
        <Text>Example 4:</Text>
        <Editor
          height={"30rem"}
          value={`public class BankService {

   public long deposit(long amount, String accountNo) {
       //deposit amount
       return 0;
   }    

   public long withDraw(long amount, String accountNo) {
       //withdraw amount
       return 0;
   }

   public void getLoanInterestInfo(String loanType) {
       if (loanType.equals("homeLoan")) {
           //do some job
       }
       if (loanType.equals("personalLoan")) {
           //do some job
       }
       if (loanType.equals("car")) {
           //do some job
       }
   }
}`}
        />
        <Text>
          This class has multiple responsibilities and hence it doesn't obey
          single responsibility principle.{" "}
        </Text>
        <Text>
          BankService can be splitted into BankService and LoanService for
          distributing the roles.
        </Text>
      </>
    ),
  },
  {
    text: (
      <>
        <Text m>Open/Closed Principle (OCP)</Text>
        <Text>
          Software entities (e.g., classes, modules, functions) should be open
          for an extension, but closed for modification.
        </Text>
        <Text>Example 1:</Text>
        <Text>Consider the below method of the class VehicleCalculations:</Text>
        <Editor
          height={"11.5rem"}
          value={`public class VehicleCalculations {
   public double calculateValue(Vehicle v) {
       if (v instanceof Car) {
          return v.getValue() * 0.8;
       if (v instanceof Bike) {
          return v.getValue() * 0.5;
   }
}`}
        />
        <Text>
          Suppose we now want to add another subclass called Truck. We would
          have to modify the above class by adding another if statement, which
          goes against the Open-Closed Principle.
        </Text>
        <Text>
          A better approach would be for the subclasses Car and Truck to
          override the calculateValue method:
        </Text>
        <Editor
          height={"15.5rem"}
          value={`public class Vehicle {
   public double calculateValue() {...}
  }
   public class Car extends Vehicle {
      public double calculateValue() {
        return this.getValue() * 0.8;
   }}
   public class Truck extends Vehicle{
      public double calculateValue() {
        return this.getValue() * 0.9;
}}`}
        />
        <Text>
          Adding another Vehicle type is as simple as making another subclass
          and extending from the Vehicle class.
        </Text>
        <Text>Example 2:</Text>
        <Editor
          height={"17.5rem"}
          value={`public double Area(object[] shapes){
 double area = 0;
 foreach(var shape in shapes){
 if(shape is Rectangle){
    Rectangle rectangle = (Rectangle) shape;
    area += rectangle.Width * rectangle.Height;
    }else{
      Circle circle = (Circle) shape;
      area += circle.Radius * circle.Radius * Math.PI;
    }
 }
 return area;
}`}
        />
        <Text>
          What if we need to add few more shapes? We need to modify all the code
          present. It could also be a interface.
        </Text>
        <Editor
          height={"19rem"}
          value={`public abstract class Shape {
 public abstract double Area();
}

public class Rectangle : Shape {
 public double Width { get; set; };
 public double Height { get; set; };
 public override double Area() { return Width * Height; }
}

public class Circle : Shape {
 public double Radius { get; set; };
 public override double Area() { return Radius * Radius * Math.PI; }
}

public double Area(Shape[] shapes){
 double area = 0;
 foreach(var shape in shapes){
   area += shape.Area();
 }
 return area;
}`}
        />
        <Text>
          Area method only has the logic to loop around the shapes and add the
          areas of them. This Area method is closed for modification now, but we
          are open for extension because whenever we want to create a new shape
          we can add here.
        </Text>
      </>
    ),
  },
  {
    text: (
      <>
        <Text m>Liskov Substitution Principle (LSP)</Text>
        <Text>
          It applies to inheritance hierarchies such that <br />
          derived classes must be completely substitutable for their base
          classes.
        </Text>
        <Text>Subtypes must be substitutable for their base types.</Text>
        <Text>Example 1:</Text>
        <Editor
          height={"22rem"}
          value={`public class Rectangle {
 private double height;
 private double width;
 public void setHeight(double h) { height = h; }
 public void setWidth(double w) { width = w; }
 ...
}
public class Square extends Rectangle {
 public void setHeight(double h) {
 super.setHeight(h);
 super.setWidth(h);
}
public void setWidth(double w) {
 super.setHeight(w);
 super.setWidth(w);
}
}`}
        />
        <Text>
          The above classes do not obey LSP because you cannot replace the
          Rectangle base class with its derived class Square. <br />
          The Square class has extra constraints, i.e., the height and width
          must be the same.
          <br />
          Therefore, substituting Rectangle with Square class may result in
          unexpected behavior.
        </Text>
        <Text>Example 2:</Text>
        <Editor
          height={"26.5rem"}
          value={`class Rectangle {
 void setWidth(double w)
 void setHeight(double h)
 double getWidth()
 double getHeight()
}
       
class Square {
 void setWidth(double w)
 void setHeight(double h)
 double getWidth()
 double getHeight()
}
       
// LSP says its a bad implementation 
       
void test(Rectangle r){
 r.setWidth(5);
 r.setHeight(4);
 assertEquals(5 * 4, r.getWidth() * r.getHeight());
}`}
        />
        <Text>
          Square won't pass here as width and height will be the same.
        </Text>
        <Text>
          Inheritance should only be used when super class is replacable by sub
          class. It shouldn't be used just to save a few lines of code.
        </Text>
      </>
    ),
  },
  {
    text: (
      <>
        <Text m>Interface Segregation Principle (ISP)</Text>
        <Text>
          No client should be forced to depend on methods that it does not use.
        </Text>
        <Text>
          The dependency of one class to another one should depend on the
          smallest possible interface.
        </Text>
        <Text>
          Clients should not be forced to implement interfaces they don't use.
        </Text>
        <Text>
          Instead of one fat interface many small interfaces are preferred based
          on groups of methods, each one serving one submodule.
        </Text>
        <Text>
          The Interface Segregation Principle (ISP) states that clients should
          not be forced to depend upon interface members they do not use.
        </Text>
        <Text>
          In other words, do not force any client to implement an interface that
          is irrelevant to them.
        </Text>
        <Text>Example 1:</Text>
        <Text>Suppose there’s an interface for vehicle and a Bike class:</Text>
        <Editor
          height={"22rem"}
          value={`public interface Vehicle {
 public void drive();
 public void stop();
 public void refuel();
 public void openDoors();
}

public class Bike implements Vehicle {
      
 // Can be implemented
 public void drive() {...}
 public void stop() {...}
 public void refuel() {...}
          
 // Can not be implemented
 public void openDoors() {...}
}`}
        />
        <Text>
          As you can see, it does not make sense for a Bike class to implement
          the openDoors() method as a bike does not have any doors!
        </Text>
        <Text>
          To fix this, ISP proposes that the interfaces be broken down into
          multiple, small cohesive interfaces so that no class is forced to
          implement any interface,
        </Text>
        <Text>and therefore methods, that it does not need.</Text>
        <Text>Example 2:</Text>
        <Editor
          height="15.5rem"
          value={` Animal 
 void feed(); // abstract
 void groom();
        
 Dog implements Animal 
 void feed(); // implementation
 void groom();
        
 Tiger implements Animal
 void feed(); // implementation 
 void groom();`}
        />
        <Text>
          we are providing a dummy implementation just to keep the compiler
          happy. Ideal way is to create another interface called Pet
        </Text>
        <Editor
          height="16.5rem"
          value={` Animal
 void feed()
        
 Pet extends Animal
 void groom()
        
 Dog implements Pet 
 void feed(); // implementation
 void groom();
        
 Tiger implements Animal
 void feed(); // implementation `}
        />
      </>
    ),
  },
  {
    text: (
      <>
        <Text m>Dependency Inversion Principle (DIP)</Text>
        <Text>
          Depend on abstractions (interfaces) rather than concrete classes.
        </Text>
        <Text>
          High-level modules should not depend on low-level modules, both should
          depend on abstractions.
        </Text>
        <Text>
          The Dependency Inversion Principle (DIP) states that we should depend
          on abstractions (interfaces and abstract classes) instead of concrete
          implementations (classes).
        </Text>
        <Text>
          The abstractions should not depend on details; instead, the details
          should depend on abstractions.
        </Text>
        <Text>Example 1:</Text>
        <Editor
          height="13rem"
          value={`enum OutputDevice {printer, disk};

 void copy(OutputDevice dev){
    int c;
    while((c = ReadKeyboard()) != EOF){
      if(dev == printer) writePrinter(c);
      else writeDisk(c);
    }
}`}
        />
        <Text>
          As the number of outputDevices increases copy method needs to keep
          changing
        </Text>
        <Text>
          The better implementation is to create a simple interface called
          reader.
        </Text>
        <Editor
          height="12rem"
          value={`interface Reader
 char read();
 interface Writer
 char write(char ch);
 void copy(Reader r, Writer w){
  char ch;
  while((ch = r.read()) != EOF) w.write(ch);
}`}
        />
        <Text>
          copy method can read from any reader and write to any writer it
          doesn't change when we've a new reader.
        </Text>
        <Text>Example 2:</Text>
        <Text>
          Consider the example below. We have a Car class that depends on the
          concrete Engine class; therefore, it is not obeying DIP.
        </Text>
        <Editor
          height="17rem"
          value={`public class Car {
 private Engine engine;
 public Car(Engine e) {
    engine = e;
  }
  public void start() {
    engine.start();
    }
  }
  public class Engine {
    public void start() {...}
 }
        `}
        />
        <Text>
          The code will work, for now, but what if we wanted to add another
          engine type, let’s say a diesel engine? This will require refactoring
          the Car class.
        </Text>
        <Text>
          However, we can solve this by introducing a layer of abstraction.
          Instead of Car depending directly on Engine, let’s add an interface:
        </Text>
        <Editor
          height={"6rem"}
          value={`public interface Engine {
 public void start();
}`}
        />
        <Text>
          Now we can connect any type of Engine that implements the Engine
          interface to the Car class:
        </Text>
        <Editor
          height={"20rem"}
          value={`public class Car {
   private Engine engine;
    public Car(Engine e) {
      engine = e;
    }
    public void start() {
      engine.start();
    }
    }
    public class PetrolEngine implements Engine {
      public void start() {...}
    }
    public class DieselEngine implements Engine {
      public void start() {...}
}`}
        />
      </>
    ),
  },
];

const Content = ({ selectedOption }) => {
  return <Container>{textContent[selectedOption].text}</Container>;
};

export default Content;
