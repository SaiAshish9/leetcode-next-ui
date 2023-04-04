import React, { useState } from "react";
import { Container } from "./styles";
import { Navbar, SideNav, Content, Editor } from "@/common";
import { StyledImg, Text } from "@/common/content/styles";
import DecoratorImg from "@/assets/p.png";
import AdapterImg from "@/assets/adapter.png";

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
        </>
      ),
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
