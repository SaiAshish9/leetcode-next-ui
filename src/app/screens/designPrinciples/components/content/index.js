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
        SOLID is a structured design approach that ensures your software is
        modular and easy to maintain, understand, debug, and refactor. Following
        SOLID also helps save time and effort in both development and
        maintenance. SOLID prevents your code from becoming rigid and fragile,
        which helps you build long-lasting software.
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
          Software entities should be open for extension but closed for
          modification.
        </Text>
      </>
    ),
  },
  {
    text: <></>,
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
