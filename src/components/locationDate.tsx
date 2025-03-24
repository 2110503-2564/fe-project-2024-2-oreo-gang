"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function LocationDate(){

    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-1 py-1 flex-row ">

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker/>

            </LocalizationProvider>

        </div>
    )


}