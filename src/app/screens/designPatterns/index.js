import React, { useState } from "react";
import { Container } from "./styles";
import { Navbar, SideNav, Content, Editor } from "@/common";
import { StyledImg, Text } from "@/common/content/styles";
import DecoratorImg from "@/assets/p.png";
import AdapterImg from "@/assets/adapter.png";
import ObserverImg from "@/assets/observer.png";
import ObserverOPImg from "@/assets/observerOp.png";
import StrategyImg from "@/assets/strategy.png";
import AbstractFactoryImg from "@/assets/abstractFactory.png";
import NullImg from "@/assets/null.png";
import StateImg from "@/assets/state.png";
import CommandImg from "@/assets/command.png";
import IntepreterImg from "@/assets/intepreter.png";
import IteratorImg from "@/assets/iterator.png";
import MediatorImg from "@/assets/mediator.png";
import MomentoImg from "@/assets/momento.png";
import TemplateImg from "@/assets/template.png";
import VisitorImg from "@/assets/visitor.png";

const DesignPatterns = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const options = [
    "Singleton",
    "Factory",
    "Builder",
    "Prototype",
    "Proxy",
    "Facade",
    "Composite",
    "Decorator",
    "Flyweight",
    "Adapter",
    "Bridge",
    "Observer",
    "Strategy",
    "Abstract Factory",
    "Chain Of Responsibility",
    "Null Object",
    "State",
    "Command",
    "Intepreter",
    "Iterator",
    "Mediator",
    "Memento",
    "Template",
    "Visitor",
    "Intercepting Filter",
    "MVC",
    "Data Access",
    "Front Controller",
    "Service Locator",
    "Transfer Object",
    "Business Delegate",
    "Composite Entity",
  ];

  const textContent = [
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. Creational design pattern (It's related to the creation of object
            in java).
          </Text>
          <Text>
            2. Only one instance of class should exist throughout the
            implementation.
          </Text>
          <Text>
            3. Other classes should be able to get instance of singleton class
            Used in logging, cache, session, drivers
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>1. Constructor should be private</Text>
          <Text>2. Public method for returning instance</Text>
          <Text>3. Instance type - private static</Text>
          <br />
          <Text m>Initialisation Type:</Text>
          <Text>1. Eager Initialisation</Text>
          <Text>
            As soon as we initialize the instance , it automatically create auto
            sync time.
          </Text>
          <Text>
            Whenever we are declaring the variable, we are defining it. This is
            the eager initialisation. At the same time, we are doing.
          </Text>
          <Text>2. Lazy Initialisation</Text>
          <Text>
            Whenever there's a need ot a call, then only it will create the
            object.
          </Text>
          <Text>3. Thread safe method initialisation</Text>
          <Text>4. Thread safe block initialisation</Text>
          <Editor
            value={`class SingletonEagar {
  private static SingletonEagar instance = new SingletonEagar(); 
  private SingletonEagar(){}
  public static SingletonEagar getInstance() {
    return instance;
  }
}

class Singleton {
  private static Singleton instance; 
  private Singleton(){}
  public static Singleton getInstance() {
   if(instance == null) {
      instance = new Singleton(); 
   }
   return instance;
  }
}
   
class SingletonSynchronizedMethod {
  private static SingletonSynchronizedMethod instance; 
  private SingletonSynchronizedMethod(){}
  public static synchronized SingletonSynchronizedMethod getInstance() {
    if(instance == null) {
      instance = new SingletonSynchronizedMethod();
    }
    return instance;
  }
}
          
class SingletonSynchronized {
  private static SingletonSynchronized instance; 
  private SingletonSynchronized(){}
  public static SingletonSynchronized getInstance() {
    if(instance == null) {
      synchronized (SingletonSynchronized.class) {
        if(instance == null) {
          instance = new SingletonSynchronized();
        }
      }
    }
    return instance;
  }
}
          
public class SingletonExample {
  public static void main(String[] args) {
    SingletonSynchronized instance = SingletonSynchronized.getInstance();
    System.out.println(instance);
    SingletonSynchronized instance1 = SingletonSynchronized.getInstance();
    System.out.println(instance1);
  }
}`}
            height={"63rem"}
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>1. Creational design pattern</Text>
          <Text>
            2. Used when we have multiple sub-classes of a super class
          </Text>
          <Text>and based on input we want to return once class instance.</Text>
          <Text>3. It provides abstraction between implementation</Text>
          <Text>
            and client classes Remove the instantiation of client classes from
            client code.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. Super class can be interface or abstract class or basic class
          </Text>
          <Text>
            2. Factory class has a static method which returns the instance of
            sub-class on input.
          </Text>
          <Editor
            value={`abstract class Vehicle {
  public abstract int getWheel();
  
  public String toString() {
    return "Wheel: " + this.getWheel();
  }
}

class Car extends Vehicle {
  int wheel;
  
  Car(int wheel) {
    this.wheel = wheel;
  }

  @Override
  public int getWheel() {
    return this.wheel;
  }
}

class Bike extends Vehicle {
  int wheel;
  
  Bike(int wheel) {
    this.wheel = wheel;
  }
  
  @Override
  public int getWheel() {
    return this.wheel;
  }
}

class VehicleFactory {
  public static Vehicle getInstance(String type, int wheel) {
    if(type == "car") {
      return new Car(wheel);
    } else if(type == "bike") {
      return new Bike(wheel);
    }
    return null;
  }
}

public class FactoryPatternExample {

  public static void main(String[] args) {
    Vehicle car = VehicleFactory.getInstance("car", 4);
    System.out.println(car);
    Vehicle bike = VehicleFactory.getInstance("bike", 2);
    System.out.println(bike);
  }

}`}
            height="65rem"
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>1. Creational design pattern</Text>
          <Text>
            2. Used when we have too many arguments to send in constructor
          </Text>
          <Text>and its hard to maintain the order.</Text>
          <Text>
            3. When we don't want to send all parameters in object
            initialisation
          </Text>
          <Text>(Generally we send optional parameters as null)</Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We create a 'static nested class', which contains all arguments
            of outer class.
          </Text>
          <Text>
            2. As per naming convention, if class name is 'Vehicle', builder
            class should be 'VehicleBuilder'
          </Text>
          <Text>
            3. Builder class have a public constructor with all required
            parameters
          </Text>
          <Text>4. A 'build()' method that will return the final object</Text>
          <Text>
            5. The main class 'Vehicle' has private constructor so to create
            instance only via Builder class.
          </Text>
          <Text>6. The main class 'Vehicle' has only getters</Text>
          <Editor
            value={`package builder;

class Vehicle {
  //required parameter
  private String engine;
  private int wheel;
  
  //optional parameter
  private int airbags;
  
  public String getEngine() {
    return this.engine;
  }
  
  public int getWheel() {
    return this.wheel;
  }
  
  public int getAirbags() {
    return this.airbags;
  }
  
  private Vehicle(VehicleBuilder builder) {
    this.engine = builder.engine;
    this.wheel = builder.wheel;
    this.airbags = builder.airbags;
  }
  
  public static class VehicleBuilder {
    private String engine;
    private int wheel;
    private int airbags;
    
    public VehicleBuilder(String engine, int wheel) {
      this.engine = engine;
      this.wheel = wheel;
    }
    
    public VehicleBuilder setAirbags(int airbags) {
      this.airbags = airbags;
      return this;
    }
    
    public Vehicle build() {
      return new Vehicle(this);
    }
  }
}

public class BuilderPatternExample {
  
  public static void main(String[] args) {
    Vehicle car = new Vehicle.VehicleBuilder("1500cc", 4).setAirbags(4).build();
    Vehicle bike = new Vehicle.VehicleBuilder("250cc", 2).build();
    
    System.out.println(car.getEngine());
    System.out.println(car.getWheel());
    System.out.println(car.getAirbags());
    System.out.println(bike.getEngine());
    System.out.println(bike.getWheel());
    System.out.println(bike.getAirbags());
  }
}`}
            height={"74rem"}
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>1. Creational design pattern</Text>
          <Text>
            2. Used when you want to avoid multiple object creation of same
            instance;
          </Text>
          <Text>
            instead you copy the object to new object and then we can modify as
            per our need.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. Object which we're copying should provide copying feature
          </Text>
          <Text>by implementing cloneable interface.</Text>
          <Text>
            2. We can override clone() method to implement as per our need
          </Text>
          <Editor
            value={`package prototype;
import java.util.ArrayList;
import java.util.List;

class Vehicle implements Cloneable {
  private List<String> vehicleList;
  
  public Vehicle() {
    this.vehicleList = new ArrayList<String>();
  }
  
  public Vehicle(List<String> list) {
    this.vehicleList = list;
  }
  
  public void insertData() {
    vehicleList.add("Honda amaze");
    vehicleList.add("Audi A4");
    vehicleList.add("Hyundai Creta");
    vehicleList.add("Maruti Baleno");
    vehicleList.add("Renault Duster");
  }
  
  public List<String> getVehicleList() {
    return this.vehicleList;
  }
  
  @Override
  public Object clone() throws CloneNotSupportedException {
    List<String> tempList = new ArrayList<String>();
    
    for(String s : this.getVehicleList()) {
      tempList.add(s);
    }
    
    return new Vehicle(tempList);
  }
}

public class PrototypePatternExample {

  public static void main(String[] args) throws CloneNotSupportedException {
    Vehicle a = new Vehicle();
    a.insertData();
    Vehicle b = (Vehicle) a.clone();
    List<String> list = b.getVehicleList();
    list.add("Honda new Amaze");
    System.out.println(a.getVehicleList());
    System.out.println(list);
    b.getVehicleList().remove("Audi A4");
    System.out.println(list);
    System.out.println(a.getVehicleList());
  }

}`}
            height="66rem"
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>1. Structural design pattern</Text>
          <Text>
            2. It improves the structure of java code. They communicates with
            the interfaces and provide better interface.
          </Text>
          <Text>
            3. Used when we want to control access, i.e. In databases, we would
            want to control the 'delete' query available only for certain users
            like admin.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. In general, we've class which is executing interface executor
            method, which is executing all commands.
          </Text>
          <Text>
            2. To control this, we add a proxy class which implements the same
            interface and write the conditions for 'admin' user before
            proceeding to actual executor.
          </Text>
          <Editor
            value={`package proxy;
interface DatabaseExecuter {
  public void executeDatabase(String query) throws Exception;
}

class DatabaseExecuterImpl implements DatabaseExecuter {

  @Override
  public void executeDatabase(String query) throws Exception {
    System.out.println("Going to execute Query: " + query);
  }
  
}

class DatabaseExecuterProxy implements DatabaseExecuter {
  boolean ifAdmin;
  DatabaseExecuterImpl dbExecuter;
  
  public DatabaseExecuterProxy(String name, String passwd) {
    if(name == "Admin" && passwd == "Admin@123") {
      ifAdmin = true;
    }
    dbExecuter = new DatabaseExecuterImpl();
  }

  @Override
  public void executeDatabase(String query) throws Exception {
    if(ifAdmin) {
      dbExecuter.executeDatabase(query);
    } else {
      if(query.equals("DELETE")) {
        throw new Exception("DELETE not allowed for non-admin user");
      } else {
        dbExecuter.executeDatabase(query);
      }
    }
  }
}

public class ProxyPatternExample {

  public static void main(String[] args) throws Exception {
    DatabaseExecuter nonAdminExecuter = new DatabaseExecuterProxy("NonAdmin", "Admin@123");
    nonAdminExecuter.executeDatabase("DELEE");
    DatabaseExecuter nonAdminExecuterDELETE = new DatabaseExecuterProxy("NonAdmin", "Admin@123");
    nonAdminExecuterDELETE.executeDatabase("DELETE");
    DatabaseExecuter adminExecuter = new DatabaseExecuterProxy("Admin", "Admin@123");
    adminExecuter.executeDatabase("DELETE");
  }

}`}
            height="61rem"
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. Facade is the front wall of a large building that you see from
            the outside
          </Text>
          <Text>2. Structural design</Text>
          <Text>
            3. Used when there're multiple interfaces of similar kind of jobs,
            then we add a Facade interface, which provides better interface to
            these interfaces and clients.
          </Text>
          <Text>
            4. It basically help in routing to related interface i.e. Drivers,
            Databases
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We'll implement a Facade helper class, which will route to method
            related to specific class based on input.
          </Text>
          <Editor
            value={`package facade;
import java.sql.Driver;

class Firefox {
  public static Driver getFirefoxDriver() {
    return null;
  }
  
  public static void generateHTMLReport(String test, Driver driver) {
    System.out.println("Generating HTML Report for Firefox Driver");
  }
  
  public static void generateJUnitReport(String test, Driver driver) {
    System.out.println("Generating JUNIT Report for Firefox Driver");
  }
}

class Chrome {
  public static Driver getChromeDriver() {
    return null;
  }
  
  public static void generateHTMLReport(String test, Driver driver) {
    System.out.println("Generating HTML Report for Chrome Driver");
  }
  
  public static void generateJUnitReport(String test, Driver driver) {
    System.out.println("Generating JUNIT Report for Chrome Driver");
  }
}

class WebExplorerHelperFacade {
  public static void generateReports(String explorer, String report, String test) {
    Driver driver = null;
    switch(explorer) {
    case "firefox":
      driver = Firefox.getFirefoxDriver();
      switch(report) {
      case "html":
        Firefox.generateHTMLReport(test, driver);
        break;
      case "junit":
        Firefox.generateJUnitReport(test, driver);
        break;
      }
    break;
    case "chrome":
      driver = Chrome.getChromeDriver();
      switch(report) {
      case "html":
        Chrome.generateHTMLReport(test, driver);
        break;
      case "junit":
        Chrome.generateJUnitReport(test, driver);
        break;
      }
    }
  }
}


public class FacadePatternExample {

  public static void main(String[] args) {
    String test = "CheckElementPresent";
    
    WebExplorerHelperFacade.generateReports("firefox", "html", test);
    WebExplorerHelperFacade.generateReports("firefox", "junit", test);
    WebExplorerHelperFacade.generateReports("chrome", "html", test);
    WebExplorerHelperFacade.generateReports("chrome", "junit", test);
  }

}`}
            height={"85rem"}
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>1. Structural design pattern</Text>
          <Text>
            2. Composite lets client treats individual objects(Leaf) and
            compositions of objects (Composite) uniformly
          </Text>
          <Text>3. Four Participants: Component, Leaf, Composite, Client</Text>
          <Text>4. If object is leaf node, request is handled directly,</Text>
          <Text>
            5. If object is Composite, it forward request to child, so some
            operation and combine operations.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>1. Component: Account class, which contains common method</Text>
          <Text>2. Leaf: Deposite Account & Savings Account</Text>
          <Text>3. Composite: Composite Account</Text>
          <Text>4. Client: Client class</Text>
          <Text>5. We'll get balance of all account for a Person</Text>
          <Editor
            value={`package composite;

import java.util.ArrayList;
import java.util.List;

abstract class Account {
  public abstract float getBalance();
}

class DepositeAccount extends Account {
  private String accountNo;
  private float accountBalance;

  public DepositeAccount(String accountNo, float accountBalance) {
    super();
    this.accountNo = accountNo;
    this.accountBalance = accountBalance;
  }

  public float getBalance() {
    return accountBalance;
  }

}

class SavingAccount extends Account {
  private String accountNo;
  private float accountBalance;

  public SavingAccount(String accountNo, float accountBalance) {
    super();
    this.accountNo = accountNo;
    this.accountBalance = accountBalance;
  }

  public float getBalance() {
    return accountBalance;
  }
}

class CompositeAccount extends Account {
  private float totalBalance;
  private List<Account> accountList = new ArrayList<Account>();

  public float getBalance() {
    totalBalance = 0;
    for (Account f : accountList) {
      totalBalance = totalBalance + f.getBalance();
    }
    return totalBalance;
  }

  public void addAccount(Account acc) {
    accountList.add(acc);
  }

  public void removeAccount(Account acc) {
    accountList.add(acc);
  }
}

public class Client {

  public static void main(String[] args) {
    CompositeAccount component = new CompositeAccount();

    component.addAccount(new DepositeAccount("DA001", 100));
    component.addAccount(new DepositeAccount("DA002", 150));
    component.addAccount(new SavingAccount("SA001", 200));

    float totalBalance = component.getBalance();
    System.out.println("Total Balance : " + totalBalance);
  }

}`}
            height={"88rem"}
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>1. Structural design pattern</Text>
          <Text>
            2. Used when we want to modify functionality of an Object at runtime
            & it should not change individual Object functionality.
          </Text>
          <Text>i.e. Adding different functionalities in Dress</Text>
          <br />
          <Text m>Implementation:</Text>
          <StyledImg alt="img" src={DecoratorImg} />
          <Editor
            value={`package decorator;

interface Dress {
  public void assemble();
}

class BasicDress implements Dress {
  @Override
  public void assemble() {
    System.out.println("Basic Dress Features");
  }
}

class DressDecorator implements Dress {
  protected Dress dress;
  
  public DressDecorator(Dress c) {
    this.dress = c;
  }

  @Override
  public void assemble() {
    this.dress.assemble();
  }
}

class CasualDress extends DressDecorator {
  public CasualDress(Dress c) {
    super(c);
  }
  
  @Override
  public void assemble() {
    super.assemble();
    System.out.println("Adding Casual Dress Features");
  }
}


class SportyDress extends DressDecorator {
  public SportyDress(Dress c) {
    super(c);
  }
  
  @Override
  public void assemble() {
    super.assemble();
    System.out.println("Adding Sporty Dress Features");
  }
}

class FancyDress extends DressDecorator {
  public FancyDress(Dress c) {
    super(c);
  }
  
  @Override
  public void assemble() {
    super.assemble();
    System.out.println("Adding Fancy Dress Features");
  }
}

public class DecoratorPatterTest {

  public static void main(String[] args) {

    Dress sportyDress = new SportyDress(new BasicDress());
    sportyDress.assemble();
    System.out.println();
    
    Dress fancyDress = new FancyDress(new BasicDress());
    fancyDress.assemble();
    System.out.println();
    
    Dress casualDress = new CasualDress(new BasicDress());
    casualDress.assemble();
    System.out.println();
    
    
    Dress sportyFancyDress = new SportyDress(new FancyDress(new BasicDress()));
    sportyFancyDress.assemble();
    System.out.println();
    
    Dress casualFancyDress = new CasualDress(new FancyDress(new BasicDress()));
    casualFancyDress.assemble();
    
  }
}`}
            height={"103rem"}
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>1. Structural design pattern</Text>
          <Text>
            2. Used when we need to create many objects of a class. We use it to
            reduce creation of object.
          </Text>
          <Text>3. Intrinsic Properties: Which are same for a object.</Text>
          <Text>
            4. Extrinsic Properties: Which are different for a object.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>Interface: Which contain common method:</Text>
          <Text>
            Employee Object: Individual Class: Developer, Tester Intrinsic
            Property (Developer: Fix the issue, Tester: Test the issue)
          </Text>
          <Text>
            Extrinsic Property: Skills We use Factory to use return Object:
          </Text>
          <Text>
            EmployeeFactory Client: Client class We'll assign issues as per
            skills
          </Text>
          <Editor
            value={`package flyweight;

import java.util.HashMap;
import java.util.Random;

interface Employee {
  public void assignSkill(String skill);
  public void task();
}

class Developer implements Employee {

  private final String JOB;
  private String skill;
  
  public Developer() {
    JOB = "Fix the issue";
  }
  
  @Override
  public void assignSkill(String skill) {
    this.skill = skill;
  }

  @Override
  public void task() {
    System.out.println("Developer with skill: " + this.skill + " with Job: " + JOB);
  }
  
}

class Tester implements Employee {

  private final String JOB;
  
  private String skill;
  
  public Tester() {
    JOB = "Test the issue";
  }
  
  @Override
  public void assignSkill(String skill) {
    this.skill = skill;
  }

  @Override
  public void task() {
    System.out.println("Tester with Skill: " + this.skill + " with Job: " + JOB);
  }
  
}


class EmployeeFactory {
  private static HashMap<String, Employee> m = new HashMap<String, Employee>();
  
  public static Employee getEmployee(String type) {
    Employee p = null;
    if(m.get(type) != null) {
      p = m.get(type);
    } else {
      switch(type) {
      case "Developer": 
        System.out.println("Developer Created");
        p = new Developer();
        break;
      case "Tester":
        System.out.println("Tester Created");
        p = new Tester();
        break;
      default:
        System.out.println("No Such Employee");
      }
      
      m.put(type, p);
    }
    return p;
  }
}

public class Engineering {

  private static String employeeType[] = {"Developer", "Tester"};
  private static String skills[] = {"Java", "C++", ".Net", "Python"};
  
  public static void main(String[] args) {
    for(int i = 0; i < 10; i++) {
      Employee e = EmployeeFactory.getEmployee(getRandEmployee());
      
      e.assignSkill(getRandSkill());
      
      e.task();
    }
  }
  
  public static String getRandEmployee() {
    Random r = new Random();
    int randInt = r.nextInt(employeeType.length);
    
    return employeeType[randInt];
  }
  
  public static String getRandSkill() {
    Random r = new Random();
    int randInt = r.nextInt(skills.length);
    
    return skills[randInt];
  }

}`}
            height="128rem"
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>1.Structural design pattern</Text>
          <Text>
            2. When objects offering same features, but has different interface
            i.e. Charging adapter, USB to Ethernet Adapter
          </Text>

          <Text>
            3. It allows existing classes to be used with others without
            modifying their source code i.e: WebDriver Adapter
          </Text>
          <br />
          <Text m>Implementation: </Text>
          <Text>1. Interface: WebDriver</Text>
          <Text>
            2. Interface Implementation: ChromeDriver, WebDriverAdapter
          </Text>
          <Text>3. Adapter: WebDriverAdapter</Text>
          <Text>4. Adaptee: ieDriver</Text>
          <Text>5. Client: AdapterPatternTest</Text>
          <StyledImg alt="img" src={AdapterImg} />
          <Editor
            value={`package adapter;

interface WebDriver {
  public void getElement();
  public void selectElement();
}


class ChromeDriver implements WebDriver {

  @Override
  public void getElement() {
    System.out.println("Get element from ChromeDriver");
  }

  @Override
  public void selectElement() {
    System.out.println("Select element from ChromeDriver");
    
  }
  
}

class IEDriver {

  public void findElement() {
    System.out.println("Find element from IEDriver");
  }

  public void clickElement() {
    System.out.println("Click element from IEDriver");
  }
  
}

class WebDriverAdapter implements WebDriver {

  IEDriver ieDriver;
  
  public WebDriverAdapter(IEDriver ieDriver) {
    this.ieDriver = ieDriver;
  }
  
  @Override
  public void getElement() {
    ieDriver.findElement();
    
  }

  @Override
  public void selectElement() {
    ieDriver.clickElement();
  }
  
}

public class AdapterDesignPattern {

  public static void main(String[] args) {
    ChromeDriver a = new ChromeDriver();
    a.getElement();
    a.selectElement();
    
    WebDriver a1 = new ChromeDriver();
    a1.getElement();
    a1.selectElement();
    
    IEDriver e = new IEDriver();
    e.findElement();
    e.clickElement();
    
    WebDriver wID = new WebDriverAdapter(e);
    wID.getElement();
    wID.selectElement(); 
  }

}`}
            height="90rem"
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>1. Structural design pattern</Text>
          <Text>
            2. we want to hide the implementation from client i.e.: TV & Remote
            Implementation
          </Text>
          <Text>
            3. Used when we've hierarchies in both interfaces as well as
            implementations and
          </Text>
          <Text>4. It decouples abstraction from its implementation</Text>
          <Text>
            5. Generally we've remote, which works differently for Sony &
            Philips TV, but we can have different Remote as well, i.e. oldRemote
            & newRemote, which have different methods for each TV.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>1. Class heirarchy: TV, SonyTV, PhilipsTV</Text>
          <Text>2. Interface hierarchy: Remote, OldRemote, NewRemote</Text>
          <Text>3. Client: Client class</Text>
          <Editor
            value={`package bridge;

abstract class TV {
  Remote remote;
  
  TV(Remote r) {
    this.remote = r;
  }
  
  abstract void on();
  abstract void off();
}

class Sony extends TV {
  Remote remoteType;
  Sony(Remote r) {
    super(r);
    this.remoteType = r;
  }
  
  public void on(){
    System.out.print("Sony TV ON: ");
    remoteType.on();
  }
    
  public void off(){
    System.out.print("Sony TV OFF: ");
    remoteType.off();
  }
}
    
class Philips extends TV {
  Remote remoteType;
  
  Philips(Remote r) {
    super(r);
    this.remoteType = r;
  }
  
  public void on(){
    System.out.print("Philips TV ON: ");
    remoteType.on();
  }
    
  public void off(){
    System.out.print("Philips TV OFF: ");
    remoteType.off();
  }
}

interface Remote {
  public void on();
  public void off();
}

class OldRemote implements Remote {

  @Override
  public void on() {
    System.out.println("ON with Old Remote");
  }

  @Override
  public void off() {
    System.out.println("OFF with old Remote");
  }
  
}

class NewRemote implements Remote {

  @Override
  public void on() {
    System.out.println("ON with New Remote");
  }

  @Override
  public void off() {
    System.out.println("OFF with New Remote");
  }
  
}

public class Client {
  public static void main(String[] args) {
    TV sonyOldRemote = new Sony(new OldRemote());
    sonyOldRemote.on();
    sonyOldRemote.off();
    System.out.println();
    
    TV sonyNewRemote = new Sony(new NewRemote());
    sonyNewRemote.on();
    sonyNewRemote.off();
    System.out.println();
    
    TV philipsOldRemote = new Philips(new OldRemote());
    philipsOldRemote.on();
    philipsOldRemote.off();
    System.out.println();
    
    TV philipsNewRemote = new Philips(new NewRemote());
    philipsNewRemote.on();
    philipsNewRemote.off();
    
  }
}`}
            height={"123rem"}
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Implementation:</Text>
          <Text>
            All the parties are interested in knowing the current location of
            the product i.e. Seller, User and Warehouse
          </Text>
          <StyledImg src={ObserverImg} alt="img" />
          <Editor
            value={`package observer;

import java.util.ArrayList;
import java.util.List;

interface Subject {
  void register(Observer obj);
  void unregister(Observer obj);
  void notifyObservers();
}

class DeliveryData implements Subject {

  private List<Observer> observers;
  private String location;
  
  public DeliveryData() {
    this.observers = new ArrayList<>();
  }
  
  @Override
  public void register(Observer obj) {
    observers.add(obj);
  }

  @Override
  public void unregister(Observer obj) {
      observers.remove(obj);
  }

  @Override
  public void notifyObservers() {
    for(Observer obj : observers) {
      obj.update(location);
    }
  }

  public void locationChanged() {
    this.location = getLocation();
    notifyObservers();
  }
  
  public String getLocation() {
    return "YPlace";
  }
}


interface Observer {
  public void update(String location);
}


class Seller implements Observer {
  private String location;
  
  @Override
  public void update(String location) {
    this.location = location;
    showLocation();
  }

  public void showLocation() {
    System.out.println("Notification at Seller - Current Location: " + location);
  }
}

class User implements Observer {
  private String location;
  
  @Override
  public void update(String location) {
    this.location = location;
    showLocation();
  }

  public void showLocation() {
    System.out.println("Notification at User - Current Location: " + location);
  }
}

class DeliveryWarehouseCenter implements Observer {
  private String location;
  
  @Override
  public void update(String location) {
    this.location = location;
    showLocation();
  }

  public void showLocation() {
    System.out.println("Notification at Warehouse - Current Location: " + location);
  }
}

public class ObserverPatternTest {

  public static void main(String[] args) {
    DeliveryData topic = new DeliveryData();
    
    Observer obj1 = new Seller();
    Observer obj2 = new User();
    Observer obj3 = new DeliveryWarehouseCenter();
    
    topic.register(obj1);
    topic.register(obj2);
    topic.register(obj3);
    
    topic.locationChanged();
    
    topic.unregister(obj3);
    
    System.out.println();
    topic.locationChanged();
    
  }
}`}
            height={"135rem"}
          />
          <StyledImg src={ObserverOPImg} alt="img" />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. In Strategy pattern, a class behavior or its algorithm can be
            changed at run time. This type of design pattern comes under
            behavior pattern.
          </Text>
          <Text>
            2. In Strategy pattern, we create objects which represent various
            strategies and a context object whose behavior varies as per its
            strategy object. The strategy object changes the executing algorithm
            of the context object.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We are going to create a Strategy interface defining an action
            and concrete strategy classes implementing the Strategy interface.
            Context is a class which uses a Strategy.
          </Text>
          <Text>
            2. StrategyPatternDemo, our demo class, will use Context and
            strategy objects to demonstrate change in Context behaviour based on
            strategy it deploys or uses.
          </Text>
          <StyledImg src={StrategyImg} alt="img" />
          <Editor
            value={`public interface Strategy {
   public int doOperation(int num1, int num2);
}

public class OperationAdd implements Strategy{
   @Override
   public int doOperation(int num1, int num2) {
      return num1 + num2;
   }
}

public class OperationSubstract implements Strategy{
   @Override
   public int doOperation(int num1, int num2) {
      return num1 - num2;
   }
}

public class OperationMultiply implements Strategy{
   @Override
   public int doOperation(int num1, int num2) {
      return num1 * num2;
   }
}

public class Context {
   private Strategy strategy;

   public Context(Strategy strategy){
      this.strategy = strategy;
   }

   public int executeStrategy(int num1, int num2){
      return strategy.doOperation(num1, num2);
   }
}


public class StrategyPatternDemo {
   public static void main(String[] args) {
      Context context = new Context(new OperationAdd());		
      System.out.println("10 + 5 = " + context.executeStrategy(10, 5));

      context = new Context(new OperationSubstract());		
      System.out.println("10 - 5 = " + context.executeStrategy(10, 5));

      context = new Context(new OperationMultiply());		
      System.out.println("10 * 5 = " + context.executeStrategy(10, 5));
   }
}`}
            height={"60rem"}
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. Abstract Factory patterns work around a super-factory which
            creates other factories.
          </Text>
          <Text>This factory is also called as factory of factories.</Text>
          <Text>
            This type of design pattern comes under creational pattern as this
            pattern provides one of the best ways to create an object.
          </Text>
          <Text>
            2. In Abstract Factory pattern an interface is responsible for
            creating a factory of related objects without explicitly specifying
            their classes.
          </Text>
          <Text>
            Each generated factory can give the objects as per the Factory
            pattern.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We are going to create a Shape interface and a concrete class
            implementing it.
          </Text>
          <Text>
            2. We create an abstract factory class AbstractFactory as next step.
            Factory class ShapeFactory is defined, which extends
            AbstractFactory. A factory creator/generator class FactoryProducer
            is created.
          </Text>
          <Text>
            3. AbstractFactoryPatternDemo, our demo class uses FactoryProducer
            to get a AbstractFactory object.
          </Text>
          <Text>
            4. It will pass information (CIRCLE / RECTANGLE / SQUARE for Shape)
            to AbstractFactory to get the type of object it needs.
          </Text>
          <StyledImg src={AbstractFactoryImg} alt="img" />
          <Editor
            value={`public interface Shape {
   void draw();
}

public class RoundedRectangle implements Shape {
   @Override
   public void draw() {
      System.out.println("Inside RoundedRectangle::draw() method.");
   }
}

public class Rectangle implements Shape {
   @Override
   public void draw() {
      System.out.println("Inside Rectangle::draw() method.");
   }
}

public abstract class AbstractFactory {
   abstract Shape getShape(String shapeType) ;
}

public class ShapeFactory extends AbstractFactory {
   @Override
   public Shape getShape(String shapeType){    
      if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new Rectangle();         
      }else if(shapeType.equalsIgnoreCase("SQUARE")){
         return new Square();
      }	 
      return null;
   }
}

public class RoundedShapeFactory extends AbstractFactory {
   @Override
   public Shape getShape(String shapeType){    
      if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new RoundedRectangle();         
      }else if(shapeType.equalsIgnoreCase("SQUARE")){
         return new RoundedSquare();
      }	 
      return null;
   }
}

public class FactoryProducer {
   public static AbstractFactory getFactory(boolean rounded){   
      if(rounded){
         return new RoundedShapeFactory();         
      }else{
         return new ShapeFactory();
      }
   }
}

public class AbstractFactoryPatternDemo {
   public static void main(String[] args) {
      //get shape factory
      AbstractFactory shapeFactory = FactoryProducer.getFactory(false);
      //get an object of Shape Rectangle
      Shape shape1 = shapeFactory.getShape("RECTANGLE");
      //call draw method of Shape Rectangle
      shape1.draw();
      //get an object of Shape Square 
      Shape shape2 = shapeFactory.getShape("SQUARE");
      //call draw method of Shape Square
      shape2.draw();
      //get shape factory
      AbstractFactory shapeFactory1 = FactoryProducer.getFactory(true);
      //get an object of Shape Rectangle
      Shape shape3 = shapeFactory1.getShape("RECTANGLE");
      //call draw method of Shape Rectangle
      shape3.draw();
      //get an object of Shape Square 
      Shape shape4 = shapeFactory1.getShape("SQUARE");
      //call draw method of Shape Square
      shape4.draw();
      
   }
}`}
            height={"94rem"}
          />
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. The chain of responsibility pattern creates a chain of receiver
            objects for a request.
          </Text>
          <Text>
            2. This pattern decouples sender and receiver of a request based on
            type of request. This pattern comes under behavioral patterns.
          </Text>
          <Text>
            3. In this pattern, normally each receiver contains reference to
            another receiver.
          </Text>
          <Text>
            4. If one object cannot handle the request then it passes the same
            to the next receiver and so on.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We have created an abstract class AbstractLogger with a level of
            logging.
          </Text>
          <Text>
            {" "}
            2. Then we have created three types of loggers extending the
            AbstractLogger.
          </Text>
          <Text>
            3. Each logger checks the level of message to its level and print
            accordingly otherwise does not print and pass the message to its
            next logger.
          </Text>
          <Editor
            value={`public abstract class AbstractLogger {
   public static int INFO = 1;
   public static int DEBUG = 2;
   public static int ERROR = 3;

   protected int level;

   //next element in chain or responsibility
   protected AbstractLogger nextLogger;

   public void setNextLogger(AbstractLogger nextLogger){
      this.nextLogger = nextLogger;
   }

   public void logMessage(int level, String message){
      if(this.level <= level){
         write(message);
      }
      if(nextLogger !=null){
         nextLogger.logMessage(level, message);
      }
   }

   abstract protected void write(String message);
	
}

public class ConsoleLogger extends AbstractLogger {

   public ConsoleLogger(int level){
      this.level = level;
   }

   @Override
   protected void write(String message) {		
      System.out.println("Standard Console::Logger: " + message);
   }
}

public class ErrorLogger extends AbstractLogger {

   public ErrorLogger(int level){
      this.level = level;
   }

   @Override
   protected void write(String message) {		
      System.out.println("Error Console::Logger: " + message);
   }
}

public class FileLogger extends AbstractLogger {

   public FileLogger(int level){
      this.level = level;
   }

   @Override
   protected void write(String message) {		
      System.out.println("File::Logger: " + message);
   }
}

public class ChainPatternDemo {
	
   private static AbstractLogger getChainOfLoggers(){

      AbstractLogger errorLogger = new ErrorLogger(AbstractLogger.ERROR);
      AbstractLogger fileLogger = new FileLogger(AbstractLogger.DEBUG);
      AbstractLogger consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

      errorLogger.setNextLogger(fileLogger);
      fileLogger.setNextLogger(consoleLogger);

      return errorLogger;	
   }

   public static void main(String[] args) {
      AbstractLogger loggerChain = getChainOfLoggers();

      loggerChain.logMessage(AbstractLogger.INFO, 
         "This is an information.");

      loggerChain.logMessage(AbstractLogger.DEBUG, 
         "This is an debug level information.");

      loggerChain.logMessage(AbstractLogger.ERROR, 
         "This is an error information.");
   }
}`}
            height="104rem"
          />
          <Text m>Output:</Text>
          <Text>Standard Console::Logger: This is an information.</Text>
          <Text>File::Logger: This is an debug level information.</Text>
          <Text>
            Standard Console::Logger: This is an debug level information.
          </Text>
          <Text>Error Console::Logger: This is an error information.</Text>
          <Text>File::Logger: This is an error information. </Text>
          <Text>Standard Console::Logger: This is an error information.</Text>
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. In Null Object pattern, a null object replaces check of NULL
            object instance.
          </Text>
          <Text>
            Instead of putting if check for a null value, Null Object reflects a
            do nothing relationship.
          </Text>
          <Text>
            Such Null object can also be used to provide default behaviour in
            case data is not available.
          </Text>
          <Text>
            2. In Null Object pattern, we create an abstract class specifying
            various operations to be done, concrete classes extending this class
            and a null object class providing do nothing implemention of this
            class and will be used seemlessly where we need to check null value.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We are going to create a AbstractCustomer abstract class defining
            opearations.
          </Text>
          <Text>
            {" "}
            Here the name of the customer and concrete classes extending the
            AbstractCustomer class.
          </Text>
          <Text>
            {" "}
            A factory class CustomerFactory is created to return either
            RealCustomer or NullCustomer objects based on the name of customer
            passed to it.
          </Text>
          <Text>
            2. NullPatternDemo, our demo class, will use CustomerFactory to
            demonstrate the use of Null Object pattern.
          </Text>
          <StyledImg src={NullImg} alt="img" />
          <Editor
            value={`public abstract class AbstractCustomer {
   protected String name;
   public abstract boolean isNil();
   public abstract String getName();
}

public class RealCustomer extends AbstractCustomer {

   public RealCustomer(String name) {
      this.name = name;		
   }
   
   @Override
   public String getName() {
      return name;
   }
   
   @Override
   public boolean isNil() {
      return false;
   }
}


public class NullCustomer extends AbstractCustomer {

   @Override
   public String getName() {
      return "Not Available in Customer Database";
   }

   @Override
   public boolean isNil() {
      return true;
   }
}

public class CustomerFactory {
	
   public static final String[] names = {"Rob", "Joe", "Julie"};

   public static AbstractCustomer getCustomer(String name){
   
      for (int i = 0; i < names.length; i++) {
         if (names[i].equalsIgnoreCase(name)){
            return new RealCustomer(name);
         }
      }
      return new NullCustomer();
   }
}

public class NullPatternDemo {
   public static void main(String[] args) {

      AbstractCustomer customer1 = CustomerFactory.getCustomer("Rob");
      AbstractCustomer customer2 = CustomerFactory.getCustomer("Bob");
      AbstractCustomer customer3 = CustomerFactory.getCustomer("Julie");
      AbstractCustomer customer4 = CustomerFactory.getCustomer("Laura");

      System.out.println("Customers");
      System.out.println(customer1.getName());
      System.out.println(customer2.getName());
      System.out.println(customer3.getName());
      System.out.println(customer4.getName());
   }
}`}
            height="78rem"
          />
          <Text m>Output</Text>
          <Text>Customers </Text>
          <Text>Rob</Text>
          <Text>Not Available in Customer Database </Text>
          <Text>Julie </Text>
          <Text>Not Available in Customer Database</Text>
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. In State pattern a class behavior changes based on its state.
          </Text>
          <Text>This type of design pattern comes under behavior pattern.</Text>
          <Text>
            2. In State pattern, we create objects which represent various
            states
          </Text>
          <Text>
            and a context object whose behavior varies as its state object
            changes.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            2. We are going to create a State interface defining an action and
            concrete state classes implementing the State interface.
          </Text>
          <Text>2. Context is a class which carries a State.</Text>
          <Text>3. StatePatternDemo, our demo class, will use Context</Text>
          <Text>
            and state objects to demonstrate change in Context behavior based on
            type of state it is in.
          </Text>
          <StyledImg alt="img" src={StateImg} />
          <Editor
            value={`public interface State {
   public void doAction(Context context);
}

public class StartState implements State {

   public void doAction(Context context) {
      System.out.println("Player is in start state");
      context.setState(this);	
   }

   public String toString(){
      return "Start State";
   }
}

public class StopState implements State {

   public void doAction(Context context) {
      System.out.println("Player is in stop state");
      context.setState(this);	
   }

   public String toString(){
      return "Stop State";
   }
}

public class Context {
   private State state;

   public Context(){
      state = null;
   }

   public void setState(State state){
      this.state = state;		
   }

   public State getState(){
      return state;
   }
}


public class StatePatternDemo {
   public static void main(String[] args) {
      Context context = new Context();

      StartState startState = new StartState();
      startState.doAction(context);

      System.out.println(context.getState().toString());

      StopState stopState = new StopState();
      stopState.doAction(context);

      System.out.println(context.getState().toString());
   }
}`}
            height="71rem"
          />
          <Text m>Output:</Text>
          <Text>Player is in start state</Text>
          <Text>Start State</Text>
          <Text>Player is in stop state</Text>
          <Text>Stop State</Text>
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. Command pattern is a data driven design pattern and falls under
            behavioral pattern category.
          </Text>
          <Text>
            A request is wrapped under an object as command and passed to
            invoker object.
          </Text>
          <Text>
            2. Invoker object looks for the appropriate object which can handle
            this command
          </Text>
          <Text>
            and passes the command to the corresponding object which executes
            the command.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1, We have created an interface Order which is acting as a command.
          </Text>
          <Text>We have created a Stock class which acts as a request. </Text>
          <Text>
            We have concrete command classes BuyStock and SellStock implementing
            Order interface which will do actual command processing.
          </Text>
          <Text>
            {" "}
            2. A class Broker is created which acts as an invoker object. It can
            take and place orders.
          </Text>
          <Text>
            Broker object uses command pattern to identify which object will
            execute which command based on the type of command.
          </Text>
          <Text>
            CommandPatternDemo, our demo class, will use Broker class to
            demonstrate command pattern.
          </Text>
          <StyledImg alt="img" src={CommandImg} />
          <Editor
            value={`public interface Order {
   void execute();
}

public class Stock {
	
   private String name = "ABC";
   private int quantity = 10;

   public void buy(){
      System.out.println("Stock [ Name: "+name+", 
         Quantity: " + quantity +" ] bought");
   }
   public void sell(){
      System.out.println("Stock [ Name: "+name+", 
         Quantity: " + quantity +" ] sold");
   }
}

public class BuyStock implements Order {
   private Stock abcStock;

   public BuyStock(Stock abcStock){
      this.abcStock = abcStock;
   }

   public void execute() {
      abcStock.buy();
   }
}

public class SellStock implements Order {
   private Stock abcStock;

   public SellStock(Stock abcStock){
      this.abcStock = abcStock;
   }

   public void execute() {
      abcStock.sell();
   }
}

import java.util.ArrayList;
import java.util.List;

   public class Broker {
   private List<Order> orderList = new ArrayList<Order>(); 

   public void takeOrder(Order order){
      orderList.add(order);		
   }

   public void placeOrders(){
   
      for (Order order : orderList) {
         order.execute();
      }
      orderList.clear();
   }
}

public class CommandPatternDemo {
   public static void main(String[] args) {
      Stock abcStock = new Stock();

      BuyStock buyStockOrder = new BuyStock(abcStock);
      SellStock sellStockOrder = new SellStock(abcStock);

      Broker broker = new Broker();
      broker.takeOrder(buyStockOrder);
      broker.takeOrder(sellStockOrder);

      broker.placeOrders();
   }
}
`}
            height="90rem"
          />
          <Text m>Output:</Text>
          <Text>Stock [ Name: ABC, Quantity: 10 ] bought</Text>
          <Text>Stock [ Name: ABC, Quantity: 10 ] sold</Text>
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. Interpreter pattern provides a way to evaluate language grammar
            or expression.
          </Text>
          <Text>This type of pattern comes under behavioral pattern.</Text>
          <Text>
            This pattern involves implementing an expression interface which
            tells to interpret a particular context.{" "}
          </Text>
          <Text>
            This pattern is used in SQL parsing, symbol processing engine etc.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We are going to create an interface Expression and concrete
            classes implementing the Expression interface.
          </Text>
          <Text>
            {" "}
            2. A class TerminalExpression is defined which acts as a main
            interpreter of context in question.
          </Text>
          <Text>
            {" "}
            3. Other classes OrExpression, AndExpression are used to create
            combinational expressions.
          </Text>
          <Text>
            4. InterpreterPatternDemo, our demo class, will use Expression class
            to create rules and demonstrate parsing of expressions.
          </Text>
          <StyledImg src={IntepreterImg} alt="img" />
          <Editor
            value={`public interface Expression {
   public boolean interpret(String context);
}

public class TerminalExpression implements Expression {
	
   private String data;

   public TerminalExpression(String data){
      this.data = data; 
   }

   @Override
   public boolean interpret(String context) {
   
      if(context.contains(data)){
         return true;
      }
      return false;
   }
}

public class OrExpression implements Expression {
	 
   private Expression expr1 = null;
   private Expression expr2 = null;

   public OrExpression(Expression expr1, Expression expr2) { 
      this.expr1 = expr1;
      this.expr2 = expr2;
   }

   @Override
   public boolean interpret(String context) {		
      return expr1.interpret(context) || expr2.interpret(context);
   }
}

public class AndExpression implements Expression {
	 
   private Expression expr1 = null;
   private Expression expr2 = null;

   public AndExpression(Expression expr1, Expression expr2) { 
      this.expr1 = expr1;
      this.expr2 = expr2;
   }

   @Override
   public boolean interpret(String context) {		
      return expr1.interpret(context) && expr2.interpret(context);
   }
}

public class InterpreterPatternDemo {

   //Rule: Robert and John are male
   public static Expression getMaleExpression(){
      Expression robert = new TerminalExpression("Robert");
      Expression john = new TerminalExpression("John");
      return new OrExpression(robert, john);		
   }

   //Rule: Julie is a married women
   public static Expression getMarriedWomanExpression(){
      Expression julie = new TerminalExpression("Julie");
      Expression married = new TerminalExpression("Married");
      return new AndExpression(julie, married);		
   }

   public static void main(String[] args) {
      Expression isMale = getMaleExpression();
      Expression isMarriedWoman = getMarriedWomanExpression();

      System.out.println("John is male? " + isMale.interpret("John"));
      System.out.println("Julie is a married women? " + isMarriedWoman.interpret("Married Julie"));
   }
}
`}
            height="91rem"
          />
          <Text>Output:</Text>
          <Text>John is male? true</Text>
          <Text>Julie is a married women? true</Text>
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. Iterator pattern is very commonly used design pattern in Java and
            .Net programming environment.{" "}
          </Text>
          <Text>
            This pattern is used to get a way to access the elements of a
            collection object in sequential manner without any need to know its
            underlying representation.
          </Text>
          <Text>
            3. Iterator pattern falls under behavioral pattern category.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We're going to create a Iterator interface which narrates
            navigation method and a Container interface which retruns the
            iterator.
          </Text>
          <Text>
            Concrete classes implementing the Container interface will be
            responsible to implement Iterator interface and use it
          </Text>
          <Text>
            2. IteratorPatternDemo, our demo class will use NamesRepository, a
            concrete class implementation to print a Names stored as a
            collection in NamesRepository.
          </Text>
          <StyledImg alt="img" src={IteratorImg} />
          <Editor
            value={`public interface Iterator {
   public boolean hasNext();
   public Object next();
}

public interface Container {
   public Iterator getIterator();
}

public class NameRepository implements Container {
   public String names[] = {"Robert" , "John" ,"Julie" , "Lora"};

   @Override
   public Iterator getIterator() {
      return new NameIterator();
   }

   private class NameIterator implements Iterator {

      int index;

      @Override
      public boolean hasNext() {
      
         if(index < names.length){
            return true;
         }
         return false;
      }

      @Override
      public Object next() {
      
         if(this.hasNext()){
            return names[index++];
         }
         return null;
      }		
   }
}

public class IteratorPatternDemo {
	
   public static void main(String[] args) {
      NameRepository namesRepository = new NameRepository();

      for(Iterator iter = namesRepository.getIterator(); iter.hasNext();){
         String name = (String)iter.next();
         System.out.println("Name : " + name);
      } 	
   }
}`}
            height="61rem"
          />
          <Text m>Output:</Text>
          <Text>Name : Robert</Text>
          <Text>Name : John</Text>
          <Text>Name : Julie</Text>
          <Text>Name : Lora</Text>
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. Mediator pattern is used to reduce communication complexity
            between multiple objects or classes.
          </Text>
          <Text>
            This pattern provides a mediator class which normally handles all
            the communications between different classes and supports easy
            maintenance of the code by loose coupling.
          </Text>
          <Text>
            2. Mediator pattern falls under behavioral pattern category.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We are demonstrating mediator pattern by example of a chat room
            where multiple users can send message to chat room and it is the
            responsibility of chat room to show the messages to all users.
          </Text>
          <Text>
            2. We have created two classes ChatRoom and User. User objects will
            use ChatRoom method to share their messages.
          </Text>
          <Text>
            3. MediatorPatternDemo, our demo class, will use User objects to
            show communication between them.
          </Text>
          <StyledImg src={MediatorImg} alt="img" />
          <Editor
            value={`import java.util.Date;

public class ChatRoom {
   public static void showMessage(User user, String message){
      System.out.println(new Date().toString() + " [" + user.getName() + "] : " + message);
   }
}

public class User {
   private String name;

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public User(String name){
      this.name  = name;
   }

   public void sendMessage(String message){
      ChatRoom.showMessage(this,message);
   }
}

public class MediatorPatternDemo {
   public static void main(String[] args) {
      User robert = new User("Robert");
      User john = new User("John");

      robert.sendMessage("Hi! John!");
      john.sendMessage("Hello! Robert!");
   }
}
`}
            height="45rem"
          />
          <Text m>Output:</Text>
          <Text>Thu Jan 31 16:05:46 IST 2013 [Robert] : Hi! John!</Text>
          <Text>Thu Jan 31 16:05:46 IST 2013 [John] : Hello! Robert!</Text>
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. Memento pattern is used to restore state of an object to a
            previous state.
          </Text>
          <Text>
            2. Memento pattern falls under behavioral pattern category.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>1. Memento pattern uses three actor classes.</Text>
          <Text>
            2. Memento contains state of an object to be restored. Originator
            creates and stores states in Memento objects and Caretaker object is
            responsible to restore object state from Memento.{" "}
          </Text>
          <Text>
            3. We have created classes Memento, Originator and CareTaker.
          </Text>
          <Text>
            4. MementoPatternDemo, our demo class, will use CareTaker and
            Originator objects to show restoration of object states.
          </Text>
          <StyledImg src={MomentoImg} alt="img" />
          <Editor
            value={`public class Memento {
   private String state;

   public Memento(String state){
      this.state = state;
   }

   public String getState(){
      return state;
   }	
}

public class Originator {
   private String state;

   public void setState(String state){
      this.state = state;
   }

   public String getState(){
      return state;
   }

   public Memento saveStateToMemento(){
      return new Memento(state);
   }

   public void getStateFromMemento(Memento memento){
      state = memento.getState();
   }
}

import java.util.ArrayList;
import java.util.List;

public class CareTaker {
   private List<Memento> mementoList = new ArrayList<Memento>();

   public void add(Memento state){
      mementoList.add(state);
   }

   public Memento get(int index){
      return mementoList.get(index);
   }
}

public class MementoPatternDemo {
   public static void main(String[] args) {
   
      Originator originator = new Originator();
      CareTaker careTaker = new CareTaker();
      
      originator.setState("State #1");
      originator.setState("State #2");
      careTaker.add(originator.saveStateToMemento());
      
      originator.setState("State #3");
      careTaker.add(originator.saveStateToMemento());
      
      originator.setState("State #4");
      System.out.println("Current State: " + originator.getState());		
      
      originator.getStateFromMemento(careTaker.get(0));
      System.out.println("First saved State: " + originator.getState());
      originator.getStateFromMemento(careTaker.get(1));
      System.out.println("Second saved State: " + originator.getState());
   }
}`}
            height="81rem"
          />
          <Text m>Output:</Text>
          <Text>Current State: State #4</Text>
          <Text>First saved State: State #2</Text>
          <Text>Second saved State: State #3</Text>
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. In Template pattern, an abstract class exposes defined
            way(s)/template(s) to execute its methods.
          </Text>
          <Text>
            2. Its subclasses can override the method implementation as per need
            but the invocation is to be in the same way as defined by an
            abstract class. This pattern comes under behavior pattern category.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We are going to create a Game abstract class defining operations
            with a template method set to be final so that it cannot be
            overridden.
          </Text>
          <Text>
            Cricket and Football are concrete classes that extend Game and
            override its methods.
          </Text>
          <Text>
            2. TemplatePatternDemo, our demo class, will use Game to demonstrate
            use of template pattern.
          </Text>
          <StyledImg alt="img" src={TemplateImg} />
          <Editor
            value={`public abstract class Game {
   abstract void initialize();
   abstract void startPlay();
   abstract void endPlay();

   //template method
   public final void play(){

      //initialize the game
      initialize();

      //start game
      startPlay();

      //end game
      endPlay();
   }
}

public class Cricket extends Game {

   @Override
   void endPlay() {
      System.out.println("Cricket Game Finished!");
   }

   @Override
   void initialize() {
      System.out.println("Cricket Game Initialized! Start playing.");
   }

   @Override
   void startPlay() {
      System.out.println("Cricket Game Started. Enjoy the game!");
   }
}

public class Football extends Game {

   @Override
   void endPlay() {
      System.out.println("Football Game Finished!");
   }

   @Override
   void initialize() {
      System.out.println("Football Game Initialized! Start playing.");
   }

   @Override
   void startPlay() {
      System.out.println("Football Game Started. Enjoy the game!");
   }
}

public class TemplatePatternDemo {
   public static void main(String[] args) {

      Game game = new Cricket();
      game.play();
      System.out.println();
      game = new Football();
      game.play();		
   }
}`}
            height="76rem"
          />
          <Text m>Output:</Text>
          <Text>Cricket Game Initialized! Start playing.</Text>
          <Text>Cricket Game Started. Enjoy the game!</Text>
          <Text>Cricket Game Finished!</Text>
          <Text>Football Game Initialized! Start playing.</Text>
          <Text>Football Game Started. Enjoy the game!</Text>
          <Text>Football Game Finished!</Text>
        </>
      ),
    },
    {
      text: (
        <>
          <Text m>Properties:</Text>
          <Text>
            1. In Visitor pattern, we use a visitor class which changes the
            executing algorithm of an element class.
          </Text>
          <Text>
            {" "}
            2. By this way, execution algorithm of element can vary as and when
            visitor varies. This pattern comes under behavior pattern category.{" "}
          </Text>
          <Text>
            3. As per the pattern, element object has to accept the visitor
            object so that visitor object handles the operation on the element
            object.
          </Text>
          <br />
          <Text m>Implementation:</Text>
          <Text>
            1. We are going to create a ComputerPart interface defining accept
            opearation.Keyboard, Mouse, Monitor and Computer are concrete
            classes implementing ComputerPart interface.
          </Text>
          <Text>
            {" "}
            2. We will define another interface ComputerPartVisitor which will
            define a visitor class operations. Computer uses concrete visitor to
            do corresponding action.
          </Text>
          <Text>
            3. VisitorPatternDemo, our demo class, will use Computer and
            ComputerPartVisitor classes to demonstrate use of visitor pattern.
          </Text>
          <StyledImg src={VisitorImg} alt="img" />
          <Editor
            value={`public interface ComputerPart {
   public void accept(ComputerPartVisitor computerPartVisitor);
}

public class Keyboard implements ComputerPart {

   @Override
   public void accept(ComputerPartVisitor computerPartVisitor) {
      computerPartVisitor.visit(this);
   }
}

public class Monitor implements ComputerPart {

   @Override
   public void accept(ComputerPartVisitor computerPartVisitor) {
      computerPartVisitor.visit(this);
   }
}

public class Mouse implements ComputerPart {

   @Override
   public void accept(ComputerPartVisitor computerPartVisitor) {
      computerPartVisitor.visit(this);
   }
}

public class Computer implements ComputerPart {
	
   ComputerPart[] parts;

   public Computer(){
      parts = new ComputerPart[] {new Mouse(), new Keyboard(), new Monitor()};		
   } 


   @Override
   public void accept(ComputerPartVisitor computerPartVisitor) {
      for (int i = 0; i < parts.length; i++) {
         parts[i].accept(computerPartVisitor);
      }
      computerPartVisitor.visit(this);
   }
}

public interface ComputerPartVisitor {
   public void visit(Computer computer);
   public void visit(Mouse mouse);
   public void visit(Keyboard keyboard);
   public void visit(Monitor monitor);
}

public class ComputerPartDisplayVisitor implements ComputerPartVisitor {

   @Override
   public void visit(Computer computer) {
      System.out.println("Displaying Computer.");
   }

   @Override
   public void visit(Mouse mouse) {
      System.out.println("Displaying Mouse.");
   }

   @Override
   public void visit(Keyboard keyboard) {
      System.out.println("Displaying Keyboard.");
   }

   @Override
   public void visit(Monitor monitor) {
      System.out.println("Displaying Monitor.");
   }
}

public class VisitorPatternDemo {
   public static void main(String[] args) {

      ComputerPart computer = new Computer();
      computer.accept(new ComputerPartDisplayVisitor());
   }
}
`}
            height="96rem"
          />
          <Text m>Output: </Text>
          <Text>Displaying Mouse.</Text>
          <Text>Displaying Keyboard.</Text> <Text>Displaying Monitor.</Text>
          <Text>Displaying Computer.</Text>
        </>
      ),
    },
    {
      text: <></>,
    },
  ];

  return (
    <>
      <Navbar />
      <Container>
        <SideNav
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
        />
        <Content selectedOption={selectedOption} textContent={textContent} />
      </Container>
    </>
  );
};

export default DesignPatterns;
