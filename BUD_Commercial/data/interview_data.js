let interview_data_raw = `[
    {
        "InterviewId": "db5fad3f-1f55-41d7-b358-c1cdffa3f078",
        "InterviewEndDate": "2024-06-06 11:15:39",
        "InterviewState": "Completed",
        "Flight": "FR 3589",
        "Dest": "FAO",
        "AirlineCode": "FR",
        "InterviewerID": 9,
        "download_time": "11-06-2024 15:35:40"
    },
    {
        "InterviewId": "4ceaf5c3-7bb4-4dc5-a054-4ca592b496f7",
        "InterviewEndDate": "2024-06-06 12:55:56",
        "InterviewState": "Completed",
        "Flight": "W6 2297",
        "Dest": "RUH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "08a8c44d-5091-4e21-8519-47d6e07228cd",
        "InterviewEndDate": "2024-06-06 12:59:09",
        "InterviewState": "Completed",
        "Flight": "W6 2251",
        "Dest": "CPH",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "fd331c4e-60e4-4229-a931-01ff62faff0e",
        "InterviewEndDate": "2024-06-06 13:04:34",
        "InterviewState": "Completed",
        "Flight": "W6 2251",
        "Dest": "CPH",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "e4f9b96b-5836-42af-9969-c848a3e700fe",
        "InterviewEndDate": "2024-06-06 17:53:18",
        "InterviewState": "Completed",
        "Flight": "FR 4216",
        "Dest": "RHO",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "e0f8f268-6ec8-4956-982d-60fcb7909f17",
        "InterviewEndDate": "2024-06-07 06:52:25",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "b99669cb-cbc7-41e8-b887-d8dbecc6d863",
        "InterviewEndDate": "2024-06-07 06:55:40",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "cd0354c3-7f3b-4ee6-9b65-57e31709a70d",
        "InterviewEndDate": "2024-06-07 06:59:45",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "5113ac23-eaa2-476a-88d0-95bde537919b",
        "InterviewEndDate": "2024-06-07 15:06:21",
        "InterviewState": "Completed",
        "Flight": "W6 2337",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "08c7c3df-a8d4-4afc-b5fa-6a3573e5e847",
        "InterviewEndDate": "2024-06-07 15:06:44",
        "InterviewState": "Completed",
        "Flight": "W6 2337",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f984b4f0-f87a-488b-95d0-b4eb0ac6c9cd",
        "InterviewEndDate": "2024-06-07 15:08:18",
        "InterviewState": "Completed",
        "Flight": "W6 2337",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "eda351d1-0701-462d-b12e-68ec838182b4",
        "InterviewEndDate": "2024-06-07 15:08:11",
        "InterviewState": "Completed",
        "Flight": "W6 2337",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1ee3df97-50d7-4efd-80f1-acde64c15ad2",
        "InterviewEndDate": "2024-06-07 16:19:11",
        "InterviewState": "Completed",
        "Flight": "W6 2383",
        "Dest": "PMI",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f513c7d8-2b35-4a65-b0b3-8bad00f2cae7",
        "InterviewEndDate": "2024-06-07 17:44:19",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "759f5479-4824-4151-9e5a-5e3279b933b6",
        "InterviewEndDate": "2024-06-07 17:44:31",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "77c6154d-31e1-4569-b22b-b1906188b655",
        "InterviewEndDate": "2024-06-08 06:50:41",
        "InterviewState": "Completed",
        "Flight": "W6 2467",
        "Dest": "WAW",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "262d12f3-99d5-4ede-afb8-f1851bb5d320",
        "InterviewEndDate": "2024-06-08 06:49:14",
        "InterviewState": "Completed",
        "Flight": "W6 2467",
        "Dest": "WAW",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "116d2335-7836-497d-bff5-d442caa9e4c4",
        "InterviewEndDate": "2024-06-08 07:00:36",
        "InterviewState": "Completed",
        "Flight": "W6 2467",
        "Dest": "WAW",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "ff2fc217-89d1-4ffb-8c43-406a89c68299",
        "InterviewEndDate": "2024-06-08 09:37:58",
        "InterviewState": "Completed",
        "Flight": "W6 2233",
        "Dest": "TIA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ca8bcd11-5197-4b0c-ba31-faba3901d7ff",
        "InterviewEndDate": "2024-06-08 09:40:45",
        "InterviewState": "Completed",
        "Flight": "W6 2233",
        "Dest": "TIA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "41445d32-3d53-4f41-ba87-87293ea5d2e3",
        "InterviewEndDate": "2024-06-08 09:40:47",
        "InterviewState": "Completed",
        "Flight": "W6 2233",
        "Dest": "TIA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bf34006f-44e6-4649-9679-81b121469479",
        "InterviewEndDate": "2024-06-08 09:43:20",
        "InterviewState": "Completed",
        "Flight": "W6 2233",
        "Dest": "TIA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "57eb6d47-ad73-4cf4-b463-9bde046aa773",
        "InterviewEndDate": "2024-06-08 11:06:13",
        "InterviewState": "Completed",
        "Flight": "W6 2359",
        "Dest": "NAP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "85383301-5e03-4313-a64c-a93ffccc308e",
        "InterviewEndDate": "2024-06-10 07:19:04",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "72c12523-e184-43d8-b06a-6e6404138ef2",
        "InterviewEndDate": "2024-06-10 07:12:32",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "12966d7c-d172-43db-8132-689b10d5f738",
        "InterviewEndDate": "2024-06-10 07:13:25",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "dd3fd479-b324-4394-9723-3da5a28c91fd",
        "InterviewEndDate": "2024-06-10 07:11:19",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "7f42b055-9ce8-4f52-b804-fd4a9e53bce3",
        "InterviewEndDate": "2024-06-10 07:20:39",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "c10d2590-7bc6-42ee-a948-3b722d3e0cdb",
        "InterviewEndDate": "2024-06-10 07:25:56",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "178b9f0f-fe1c-48ec-8097-e1bac70f003b",
        "InterviewEndDate": "2024-06-10 07:32:39",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 16
    },
    {
        "InterviewId": "56f77366-f3a0-44bf-b2b1-bff062b3c98d",
        "InterviewEndDate": "2024-06-11 16:28:50",
        "InterviewState": "Completed",
        "Flight": "FR 2273",
        "Dest": "AGP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "18f8fd6e-ddf6-4d85-8a79-bdd7f69f4d13",
        "InterviewEndDate": "2024-06-11 16:27:12",
        "InterviewState": "Completed",
        "Flight": "FR 2273",
        "Dest": "AGP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "eae16775-7150-4037-bafe-0843c59e4c48",
        "InterviewEndDate": "2024-06-11 16:21:29",
        "InterviewState": "Completed",
        "Flight": "FR 2273",
        "Dest": "AGP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    }
]    

 `;