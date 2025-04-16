import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-blue-600">700+</h1>
        <p className="text-lg text-gray-600">Tailwind CSS Components</p>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Section */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$15,231.89</p>
            <p className="text-sm text-green-500">+20% from last month</p>
            {/* Placeholder for chart */}
            <div className="h-32 bg-gray-200 mt-4 rounded-md flex items-center justify-center">
              [Chart Placeholder]
            </div>
          </CardContent>
        </Card>

        {/* Subscribers Section */}
        <Card>
          <CardHeader>
            <CardTitle>Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+2350</p>
            <p className="text-sm text-green-500">+180 from last month</p>
            {/* Placeholder for bar chart */}
            <div className="h-32 bg-gray-200 mt-4 rounded-md flex items-center justify-center">
              [Bar Chart Placeholder]
            </div>
          </CardContent>
        </Card>

        {/* Move Goal Section */}
        <Card>
          <CardHeader>
            <CardTitle>Move Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Set the daily activity</p>
            <div className="flex items-center space-x-2">
              <Button variant="outline">-</Button>
              <p className="text-xl font-bold">400</p>
              <Button variant="outline">+</Button>
            </div>
            <Button className="mt-4">Set Goal</Button>
          </CardContent>
        </Card>

        {/* Team Members Section */}
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2">OM</span>
                  <p>Sofia Davis</p>
                </div>
                <p className="text-sm text-gray-500">Owner</p>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center mr-2">JL</span>
                  <p>Jackson Lee</p>
                </div>
                <p className="text-sm text-gray-500">Member</p>
              </li>
            </ul>
            <Button className="mt-4">Invite</Button>
          </CardContent>
        </Card>

        {/* Cookie Settings Section */}
        <Card>
          <CardHeader>
            <CardTitle>Cookie Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Strictly Necessary</p>
            <p className="text-sm text-gray-500">These cookies are essential in order to use the website.</p>
            <p className="text-sm mt-4">Functional Cookies</p>
            <p className="text-sm text-gray-500">These cookies help to improve the functionality.</p>
            <Button className="mt-4">Save</Button>
          </CardContent>
        </Card>

        {/* Chat Section */}
        <Card>
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm">Hi! How are you today?</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-md">
                <p className="text-sm">I can’t login!</p>
              </div>
            </div>
            <Input placeholder="Type your message..." className="mt-4" />
          </CardContent>
        </Card>

        {/* Exercise Minutes Section */}
        <Card>
          <CardHeader>
            <CardTitle>Exercise Minutes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Track your exercise anywhere</p>
            {/* Placeholder for line chart */}
            <div className="h-32 bg-gray-200 mt-4 rounded-md flex items-center justify-center">
              [Line Chart Placeholder]
            </div>
          </CardContent>
        </Card>

        {/* Payments Section */}
        <Card>
          <CardHeader>
            <CardTitle>Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>user1@gmail.com</TableCell>
                  <TableCell>$850.00</TableCell>
                  <TableCell>Success</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>user2@gmail.com</TableCell>
                  <TableCell>$424.00</TableCell>
                  <TableCell>Pending</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Create an Account Section */}
        <Card>
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full mb-2">Continue with GitHub</Button>
            <Button className="w-full mb-2">Continue with Google</Button>
            <div className="flex items-center my-2">
              <hr className="flex-1 border-gray-300" />
              <p className="mx-2 text-sm text-gray-500">OR</p>
              <hr className="flex-1 border-gray-300" />
            </div>
            <Input placeholder="Email" className="mb-2" />
            <Input placeholder="Password" type="password" className="mb-2" />
            <Button className="w-full">Create account</Button>
          </CardContent>
        </Card>

        {/* Payment Method Section */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 mb-4">
              <Button variant="outline">Card</Button>
              <Button variant="outline">PayPal</Button>
              <Button variant="outline">Apple Pay</Button>
            </div>
            <Input placeholder="Name" className="mb-2" />
            <Input placeholder="Card Number" className="mb-2" />
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Expires" className="mb-2" />
              <Input placeholder="CVC" className="mb-2" />
            </div>
            <Button className="w-full">Continue</Button>
          </CardContent>
        </Card>

        {/* Report an Issue Section */}
        <Card>
          <CardHeader>
            <CardTitle>Report an Issue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">What area are you having problems with?</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full mt-2">
                  Billing
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Technical</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Other</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <p className="text-sm mt-4">Severity Level</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full mt-2">
                  Severity 2
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Severity 1</DropdownMenuItem>
                <DropdownMenuItem>Severity 2</DropdownMenuItem>
                <DropdownMenuItem>Severity 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Input placeholder="Description" className="mt-4" />
            <Button className="w-full mt-4">Submit</Button>
          </CardContent>
        </Card>

        {/* Share the Document Section */}
        <Card>
          <CardHeader>
            <CardTitle>Share the Document</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Anyone with the link can view" className="mb-2" />
            <Button className="w-full mb-2">Copy Link</Button>
            <p className="text-sm mt-4">People with access</p>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2">OM</span>
                  <p>Olivia Martin</p>
                </div>
                <p className="text-sm text-gray-500">Owner</p>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center mr-2">IN</span>
                  <p>Isabella Nguyen</p>
                </div>
                <p className="text-sm text-gray-500">Can edit</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}