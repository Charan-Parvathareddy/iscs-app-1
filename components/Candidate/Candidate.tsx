'use client';
import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  PlusCircle,
  ScanSearch
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState , useMemo} from 'react';
import { ChevronDown } from "lucide-react";
import { CircularProgress } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';




interface UserData {
  Name_of_Candidate: string;
  Client_Customer: string;
  Skill_Technology: string;
  Mode_of_Hire: string;
  Date_of_Submission: string;
  Recruiter: string;
  Mobile_No: number;
  Email_ID: string;
  Total_Experience: string;
  S_No: number;
  Req_ID: number;
  Cand_ID: number;
}


export function Candidate() {

  const [showSearchForm, setShowSearchForm] = useState(true); // State to track whether to show search form or not

  const handleSearchButtonClick = () => {
    setShowSearchForm(false); // Hide search form when search button is clicked
  };
  const [showInformation, setShowInformation] = useState(true);

  const handleViewInformation = () => {
    setShowInformation(false);
    // You can perform any other actions here upon clicking the button
  };
  const [userData, setUserData] = useState<UserData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  const [userName, setUserName] = useState<string>('');
  const [enterData, setEnterData] = useState<string>('');
  const [notFoundMessage, setNotFoundMessage] = useState<string | null>(null);
  const [columnName, setColumnName] = useState<string>('');
  const [isCardVisible, setIsCardVisible] = useState(true);
  




  const columns = useMemo(() => [
    {
        accessorKey: "Name_of_Candidate",
        header: 'Candidate Name',
    },
    {
        accessorKey: "Client_Customer",
        header: 'Client',
    },
    {
        accessorKey: "Skill_Technology",
        header: "Skill/Technology",
    },
    {
        accessorKey: "Mode_of_Hire",
        header: "Mode of Hire",
    },
    {
        accessorKey: "Date_of_Submission",
        header: "Date of Submission",
    },
    {
        accessorKey: "Recruiter",
        header: "Recruiter",
    },
    {
        accessorKey: "Mobile_No",
        header: "Mobile Number",
    },
    {
        accessorKey: "Email_ID",
        header: "Email ID",
    },
    {
        accessorKey: "Total_Experience",
        header: "Total Experience",
    },
    {
        accessorKey: "S_No",
        header: "Serial Number",
    },
    {
        accessorKey: "Req_ID",
        header: "Request ID",
    },
    {
        accessorKey: "Cand_ID",
        header: "Candidate ID",
    },
    {
      accessorKey: "message",
      header: "Error Message",
  },
], []);

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: "dark"
      }
    }), []
  );


  const fetchData = async () => {
    setLoading(true);
    try {
      const apiUrl = `https://deployfastapi.azurewebsites.net/recruitment_data_view/?column_name=${columnName}&user_name=${userName}&enter_data=${enterData}`;
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: UserData[] = await res.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };






  const handleFetchData = () => {
    if (userName && enterData) {
      fetchData();
    } else {
      console.log("Please enter both user name and data to fetch");
    }
    setIsCardVisible(false);
  };

  const setColumnNameValue = (value: string) => {
    // Update the state with the selected column name
    setColumnName(value);
  };
  
  


  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">ISCS</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/Dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              
              <Link
                href="/Candidate"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Candidate{" "}
              </Link>
              <Link
                href="/Client"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users  className="h-4 w-4" />
                Clients
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="/JobOpening"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Openings
              </Link>
              <Link
                href="/Analytics"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/Dashboard"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">ISCS</span>
                </Link>
                <Link
                  href="/Dashboard"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
               
                <Link
                  href="/Candidate"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Candidate
                </Link>
                <Link
                  href="/Client"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <Users  className="h-5 w-5" />
                  Clients
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="/Candidate"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Candidate
                </Link>
                <Link
                  href="/Analytics"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
               
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search ..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Candidate Information</h1>
        <Link href="/ViewCandidate">
        <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Information
                  </span>
                </Button>
                </Link>
                
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
        {/* Conditional rendering based on showInformation state */}
        {showInformation ? (
          <div className="flex flex-col items-center gap-1 text-center">
            <Button size="sm" className="h-8 gap-1" onClick={handleViewInformation}>
  <ScanSearch className="h-3.5 w-3.5" />
  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
    View Information
  </span>
</Button>
          </div>
        ) : (
          <div className="flex flex-col gap-1 ">
            {/* Placeholder content */}
            {loading ? null : (
              <Card className={`w-full max-w-sm ${isCardVisible ? '' : 'hidden'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">Search</CardTitle>
                  <CardDescription>
                    Enter your Credentials to process the request.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="userName">User Name</Label>
                    <Input id="userName" type="text" placeholder="Enter UserName" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                  </div>
                  <div className="grid gap-2" >
                    <Label htmlFor="status">Search Criteria</Label>
                    {/* Custom select component */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant='outline'className="w-full">{columnName ? columnName : 'Select status'} 
                        <ChevronDown className="ml-40 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem onSelect={() => setColumnName('Name_of_Candidate')}>Candidate Name</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setColumnName('skill_technology')}>Skill Technology</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setColumnName('Recruiter')}>Recruiter</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setColumnName('Mobile_No')}>Mobile Number</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="enterData">Enter Data</Label>
                    <Input id="enterData" type="text" placeholder="Enter Data" value={enterData} onChange={(e) => setEnterData(e.target.value)} required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleFetchData}>Search</Button>
                </CardFooter>
              </Card>
            )}
            {/* Loading spinner */}
            {loading && <CircularProgress />}
            {/* Render MaterialReactTable if userData is available */}
            {userData !== null && userData !== undefined && (
              <ThemeProvider theme={theme}>
                {/* Render MaterialReactTable directly inside the specified div */}
                <MaterialReactTable columns={columns} data={userData} />
              </ThemeProvider>
            )}
          </div>
        )}
      </div>
    </main>

      </div>
    </div>
  )
}
