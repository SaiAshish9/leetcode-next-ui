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
        <Text m>Single Responsibility</Text>
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
        <Text m>Open/Closed</Text>
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
        <Text></Text>
      </>
    ),
  },
  {
    text: <></>,
  },
  {
    text: <></>,
  },
];

const Content = ({ selectedOption }) => {
  return <Container>{textContent[selectedOption].text}</Container>;
};

export default Content;
