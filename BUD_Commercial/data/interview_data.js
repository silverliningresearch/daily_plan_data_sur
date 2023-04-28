let interview_data_raw = `[
    {
        "InterviewId": "7d8dd068-b601-45b3-969e-242e72c6f49d",
        "InterviewEndDate": "2023-04-16 09:11:39",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 7,
        "download_time": "28-04-2023 22:35:34"
    },
    {
        "InterviewId": "b199a7b9-5e60-40b9-a4ea-4fa385bb46c5",
        "InterviewEndDate": "2023-04-04 15:39:22",
        "InterviewState": "Completed",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "611894fe-2f78-4f05-8286-e9cc966385f9",
        "InterviewEndDate": "2023-04-07 13:38:30",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3a098953-ee22-4aa2-90f8-3090e371cff3",
        "InterviewEndDate": "2023-04-06 15:49:44",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "f276ba34-93b9-40db-85cb-3312eb1c4549",
        "InterviewEndDate": "2023-04-09 13:51:12",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "023790dd-10c2-4bbc-8606-00424d3edc73",
        "InterviewEndDate": "2023-04-09 13:05:39",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c22c03a1-81e3-401e-9de0-45ca5e303703",
        "InterviewEndDate": "2023-04-18 12:09:30",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2d5a043d-9322-43ff-9975-4767c778bb2e",
        "InterviewEndDate": "2023-04-09 12:37:47",
        "InterviewState": "Completed",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9a1e39d4-1393-401b-bd4d-6740adced7ec",
        "InterviewEndDate": "2023-04-18 09:23:23",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "425eed9b-9782-487e-8243-7551c00dd1e7",
        "InterviewEndDate": "2023-04-09 13:09:32",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ad850be9-6316-4d5e-8d66-669546ef8d69",
        "InterviewEndDate": "2023-04-09 12:40:21",
        "InterviewState": "Completed",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "556d2898-1e0a-4781-844d-dde5b4cb7b39",
        "InterviewEndDate": "2023-04-04 15:39:42",
        "InterviewState": "Completed",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "5a8eef68-871b-4f7b-b811-c96e47f431e5",
        "InterviewEndDate": "2023-04-04 15:42:17",
        "InterviewState": "Completed",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "91a934f3-e957-4413-a13a-20fba2148b81",
        "InterviewEndDate": "2023-04-04 15:47:53",
        "InterviewState": "Completed",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "f1855e13-8d8a-4895-9b92-f8b1e0e76482",
        "InterviewEndDate": "2023-04-06 15:36:27",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "419db8a3-3bec-45c2-ad22-f41745644ddb",
        "InterviewEndDate": "2023-04-06 15:38:31",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "a798da6b-88bc-42ad-be7b-c4945087edb9",
        "InterviewEndDate": "2023-04-06 15:36:06",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "8170ece4-7a7b-464e-96e1-bb9c9dfd5d80",
        "InterviewEndDate": "2023-04-06 15:47:19",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "5b9894dd-d5c4-44f1-a5e2-f54ea1b28534",
        "InterviewEndDate": "2023-04-06 15:53:05",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "acdd239b-636d-4eac-8812-5d6608b5d6cb",
        "InterviewEndDate": "2023-04-06 15:53:56",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "c8994f65-8f65-4a12-b724-6a7f7258ced5",
        "InterviewEndDate": "2023-04-07 13:47:54",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 7
    },
    {
        "InterviewId": "5ab2feb8-a198-434e-9651-9c42867e1c9f",
        "InterviewEndDate": "2023-04-17 16:54:41",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "07737b89-af1c-4911-8c40-afda3db77ef7",
        "InterviewEndDate": "2023-04-07 13:40:50",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 7
    },
    {
        "InterviewId": "53b04755-a00a-4061-9198-f8d158e2db55",
        "InterviewEndDate": "2023-04-07 13:41:28",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 7
    },
    {
        "InterviewId": "0cd20489-4d0d-45ad-b4fd-d44729d4d3d1",
        "InterviewEndDate": "2023-04-14 11:22:30",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "0ef154ab-1c12-446e-9024-68321d58da32",
        "InterviewEndDate": "2023-04-07 18:57:03",
        "InterviewState": "Completed",
        "Flight": "LS 1322",
        "Dest": "BHX",
        "AirlineCode": "LS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "cdc74cf8-3539-4551-89e6-ab30e80ab28d",
        "InterviewEndDate": "2023-04-09 12:34:27",
        "InterviewState": "Completed",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0f6933f5-ce16-4827-82fc-d464136e481b",
        "InterviewEndDate": "2023-04-09 12:54:28",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "760faf15-1e11-4d5c-b54c-305d1438aacd",
        "InterviewEndDate": "2023-04-09 13:11:49",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4724f171-998c-4607-a9ce-79589cb1cad6",
        "InterviewEndDate": "2023-04-09 13:08:41",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c6c884a5-70c6-430d-828b-dc0e8036ef7a",
        "InterviewEndDate": "2023-04-09 13:49:45",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "154b0c2c-c247-470b-b9ea-2d77f3c0ca70",
        "InterviewEndDate": "2023-04-18 12:03:40",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8db99680-60b7-4d99-8f85-8116d09a35f8",
        "InterviewEndDate": "2023-04-09 13:37:47",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5dd29ff7-350a-4717-9889-92afd33900cd",
        "InterviewEndDate": "2023-04-09 13:39:23",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b149b6ba-9f35-403b-a710-74beeea2f59c",
        "InterviewEndDate": "2023-04-09 13:40:06",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9be17651-0309-43d1-a87c-560dfbcdfd72",
        "InterviewEndDate": "2023-04-09 13:50:28",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dcccd405-e245-4cc9-9174-c2cda28cbe2c",
        "InterviewEndDate": "2023-04-09 13:51:16",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "841e7e0f-d134-4784-ae3e-cbb8b9c9c289",
        "InterviewEndDate": "2023-04-17 16:35:35",
        "InterviewState": "Completed",
        "Flight": "W6 2371",
        "Dest": "MAD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "807ccb90-7a19-40ac-b112-893d54b0b2d5",
        "InterviewEndDate": "2023-04-18 12:08:26",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d31cb643-6ee6-4569-9cc7-2f1d9e8e8cbb",
        "InterviewEndDate": "2023-04-14 12:03:19",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 7
    },
    {
        "InterviewId": "f47a4f8e-960e-455f-b948-251f4c56f255",
        "InterviewEndDate": "2023-04-14 11:20:45",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "f90fbe76-6b03-4af8-a744-12cb63d2336f",
        "InterviewEndDate": "2023-04-14 11:27:35",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "e23faa97-492c-41ae-8071-2eeec937f025",
        "InterviewEndDate": "2023-04-23 17:21:12",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "6cdcb665-f1b8-4739-af9d-b0228e00025e",
        "InterviewEndDate": "2023-04-15 13:54:00",
        "InterviewState": "Completed",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "c8d3b0cc-f745-4688-b173-5c2915eced36",
        "InterviewEndDate": "2023-04-14 12:03:00",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 7
    },
    {
        "InterviewId": "01afe88c-0bf6-4ddd-9083-45c8e974024f",
        "InterviewEndDate": "2023-04-14 12:01:42",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 7
    },
    {
        "InterviewId": "546a63b7-e8d3-4b19-8bc7-15fe6da541cb",
        "InterviewEndDate": "2023-04-14 12:01:33",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 7
    },
    {
        "InterviewId": "7d847e9b-c657-4187-8f3c-24e4b90ae642",
        "InterviewEndDate": "2023-04-15 13:55:31",
        "InterviewState": "Completed",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "243e8823-aed4-44e5-8ee8-40b32b0e4b70",
        "InterviewEndDate": "2023-04-15 13:46:14",
        "InterviewState": "Completed",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "96a4222c-43ab-4d34-a0f1-09e2e57fffb0",
        "InterviewEndDate": "2023-04-15 13:54:50",
        "InterviewState": "Completed",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "acb95d15-4ea4-495a-8e35-4e9f77e5ce85",
        "InterviewEndDate": "2023-04-16 09:04:04",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 7
    },
    {
        "InterviewId": "533f1aa5-09e4-4199-b387-08a6fe6329f9",
        "InterviewEndDate": "2023-04-16 06:11:48",
        "InterviewState": "Completed",
        "Flight": "AF 1695",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 7
    },
    {
        "InterviewId": "a263e856-f0c2-49bf-9ef0-b85e9ea4ee2a",
        "InterviewEndDate": "2023-04-15 18:39:24",
        "InterviewState": "Completed",
        "Flight": "A3  879",
        "Dest": "ATH",
        "AirlineCode": "A3",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8fd11604-6858-44be-ade0-0018840c7930",
        "InterviewEndDate": "2023-04-15 18:45:03",
        "InterviewState": "Completed",
        "Flight": "A3  879",
        "Dest": "ATH",
        "AirlineCode": "A3",
        "InterviewerID": 1
    },
    {
        "InterviewId": "570b10ff-1be7-466e-98bc-1b1720f40f1c",
        "InterviewEndDate": "2023-04-15 18:43:20",
        "InterviewState": "Completed",
        "Flight": "A3  879",
        "Dest": "ATH",
        "AirlineCode": "A3",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7e279115-a158-4e52-b522-ff682c24618b",
        "InterviewEndDate": "2023-04-15 19:32:34",
        "InterviewState": "Completed",
        "Flight": "FR 6278",
        "Dest": "CTA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "46ee98c1-3d8a-494d-b3b4-253ef74a51f8",
        "InterviewEndDate": "2023-04-15 19:34:55",
        "InterviewState": "Completed",
        "Flight": "FR 6278",
        "Dest": "CTA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "197079c1-3459-486b-b38e-fdbd140bd60a",
        "InterviewEndDate": "2023-04-15 19:34:20",
        "InterviewState": "Completed",
        "Flight": "FR 6278",
        "Dest": "CTA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f899b1f2-1617-400b-bb3f-68f4a89b8c12",
        "InterviewEndDate": "2023-04-15 20:49:38",
        "InterviewState": "Completed",
        "Flight": "FR 3827",
        "Dest": "BLQ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ba7d9c43-215d-4f13-aca4-3013e9924a29",
        "InterviewEndDate": "2023-04-15 20:56:48",
        "InterviewState": "Completed",
        "Flight": "FR 3827",
        "Dest": "BLQ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "48883af5-0a8c-4827-b055-13831ea72f8f",
        "InterviewEndDate": "2023-04-15 20:51:23",
        "InterviewState": "Completed",
        "Flight": "FR 3827",
        "Dest": "BLQ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d6762336-adda-4531-bcaa-e99e5fff7761",
        "InterviewEndDate": "2023-04-17 10:50:01",
        "InterviewState": "Completed",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "755ed7ae-b677-478d-b3f9-ae2b1e0ae7b7",
        "InterviewEndDate": "2023-04-17 11:01:22",
        "InterviewState": "Completed",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d34eebcc-1dec-4df5-b371-acce72914b42",
        "InterviewEndDate": "2023-04-17 10:57:17",
        "InterviewState": "Completed",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4cea58c7-0cd3-43c9-82dc-e19d48343789",
        "InterviewEndDate": "2023-04-16 06:11:20",
        "InterviewState": "Completed",
        "Flight": "AF 1695",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6b6399a6-0455-4f82-8c8a-d6b5fa4e5e98",
        "InterviewEndDate": "2023-04-16 09:00:17",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4e120fbd-4189-424c-9eec-92115252ca6b",
        "InterviewEndDate": "2023-04-16 09:02:35",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 7
    },
    {
        "InterviewId": "555ad8dd-8379-4f61-bc01-5092a4455887",
        "InterviewEndDate": "2023-04-16 09:07:39",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3ba8c410-5331-4bce-be0f-f97b54bebd8f",
        "InterviewEndDate": "2023-04-17 16:55:33",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "fb00ab90-20e7-42ee-b545-f8a3cb84f2e3",
        "InterviewEndDate": "2023-04-23 17:21:23",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "3acaec82-2df0-43ea-8d2a-631297475de0",
        "InterviewEndDate": "2023-04-17 10:58:56",
        "InterviewState": "Completed",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "01a352cf-ba66-4510-97f4-d09455eef14b",
        "InterviewEndDate": "2023-04-17 10:58:28",
        "InterviewState": "Completed",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3330b458-5c06-49fb-8e77-52cac13643cf",
        "InterviewEndDate": "2023-04-17 12:18:19",
        "InterviewState": "Completed",
        "Flight": "W6 2403",
        "Dest": "NYO",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f79d02b2-860e-4393-b908-2e5209855573",
        "InterviewEndDate": "2023-04-18 11:10:17",
        "InterviewState": "Completed",
        "Flight": "W6 2359",
        "Dest": "NAP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b98274cb-19d0-4335-a7a5-24d14e4384a3",
        "InterviewEndDate": "2023-04-17 12:16:51",
        "InterviewState": "Completed",
        "Flight": "W6 2403",
        "Dest": "NYO",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a4f6d079-d943-4871-a59c-24fd6e720b6e",
        "InterviewEndDate": "2023-04-17 16:29:09",
        "InterviewState": "Completed",
        "Flight": "W6 2371",
        "Dest": "MAD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "86c91fcf-e131-42e8-b585-a2ea93b0ba5f",
        "InterviewEndDate": "2023-04-17 12:22:30",
        "InterviewState": "Completed",
        "Flight": "W6 2403",
        "Dest": "NYO",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f62efaee-56e5-4e30-9dc7-b83ad2d8b4b2",
        "InterviewEndDate": "2023-04-17 12:54:58",
        "InterviewState": "Completed",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1b706e85-66a9-479a-b40d-c98fabcb7dec",
        "InterviewEndDate": "2023-04-17 16:29:20",
        "InterviewState": "Completed",
        "Flight": "W6 2371",
        "Dest": "MAD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "37ddada8-c03f-4987-9ae6-a29a02f8236a",
        "InterviewEndDate": "2023-04-17 16:37:11",
        "InterviewState": "Completed",
        "Flight": "W6 2371",
        "Dest": "MAD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cd4aaf81-8442-4ba6-a84a-7eef7055bb37",
        "InterviewEndDate": "2023-04-18 09:25:32",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "53651ed4-a70f-42e0-b11b-dbecbe12c9b6",
        "InterviewEndDate": "2023-04-17 16:36:46",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "727ded0a-860e-4291-a51c-7a254919c0da",
        "InterviewEndDate": "2023-04-17 16:40:18",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6e74a946-c5a0-4c6d-ac09-8f69d6ae496e",
        "InterviewEndDate": "2023-04-17 16:55:01",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "8b6c2da7-c2b9-441a-b036-b2dc6567e9ee",
        "InterviewEndDate": "2023-04-24 15:01:31",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 7
    },
    {
        "InterviewId": "77d892dc-d5a6-4e19-98b3-99a6234d6ae3",
        "InterviewEndDate": "2023-04-18 09:43:58",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "27f3c545-1c35-4b70-a3f6-9f7125eaea1e",
        "InterviewEndDate": "2023-04-18 09:41:19",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e757cce8-35a4-4921-9301-621645eb2703",
        "InterviewEndDate": "2023-04-18 09:51:00",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e448dd84-05da-4526-8846-5849eaec864f",
        "InterviewEndDate": "2023-04-18 11:58:21",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d774af74-28b8-45bb-bdf0-1992b6eb0f43",
        "InterviewEndDate": "2023-04-18 11:52:46",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2fa75139-5e4c-4ec8-a258-8740a46d8674",
        "InterviewEndDate": "2023-04-18 11:50:24",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "73c81f5c-e851-4f03-a39c-94cc2a0e98cb",
        "InterviewEndDate": "2023-04-18 11:05:12",
        "InterviewState": "Completed",
        "Flight": "W6 2359",
        "Dest": "NAP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "423cb5a9-251e-462c-a54f-d0c890487675",
        "InterviewEndDate": "2023-04-18 11:19:12",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 7
    },
    {
        "InterviewId": "efd1443e-9257-4043-9143-65a7f1e0e0e3",
        "InterviewEndDate": "2023-04-18 11:17:33",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 7
    },
    {
        "InterviewId": "06b1ab81-2b1e-45d6-bfb7-20951e837e29",
        "InterviewEndDate": "2023-04-18 11:19:25",
        "InterviewState": "Completed",
        "Flight": "W6 2359",
        "Dest": "NAP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e4e61aca-9a03-4864-a739-3edcacb62f94",
        "InterviewEndDate": "2023-04-18 11:19:50",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6efc73c2-4dfa-4ec3-88d0-4417bd90ca33",
        "InterviewEndDate": "2023-04-18 11:18:23",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 7
    },
    {
        "InterviewId": "b056cba8-f6d2-4630-a293-f92bf3080d16",
        "InterviewEndDate": "2023-04-18 11:21:43",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 7
    },
    {
        "InterviewId": "96b1867a-30ad-4216-881c-e0ff6058936a",
        "InterviewEndDate": "2023-04-18 11:19:54",
        "InterviewState": "Completed",
        "Flight": "W6 2359",
        "Dest": "NAP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "543f9448-4885-4a6e-b288-dcb27de8dc68",
        "InterviewEndDate": "2023-04-23 17:16:00",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "e123218c-e305-4bfd-8615-f4fe7dbcba6f",
        "InterviewEndDate": "2023-04-18 15:30:44",
        "InterviewState": "Completed",
        "Flight": "W6 2213",
        "Dest": "HRG",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3426139b-1d2c-4733-b28e-bc0c849c8c86",
        "InterviewEndDate": "2023-04-18 11:57:20",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "42b47e37-94eb-498e-a5cc-88fc4201c194",
        "InterviewEndDate": "2023-04-18 11:57:03",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b5eda685-2a0a-4f83-88fe-6a0f21f07058",
        "InterviewEndDate": "2023-04-18 15:00:20",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fd5e6fed-fe6d-4a80-bcf9-f6c5a4eb00c1",
        "InterviewEndDate": "2023-04-18 13:23:59",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5bdd883a-305c-4793-aa11-f0f920a101a3",
        "InterviewEndDate": "2023-04-18 12:50:36",
        "InterviewState": "Completed",
        "Flight": "EW 7783",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5045e6a8-2511-47cb-8429-aa9802d1ed3e",
        "InterviewEndDate": "2023-04-18 12:50:41",
        "InterviewState": "Completed",
        "Flight": "EW 7783",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4c83ab8d-eae5-498f-9c7b-29dd05976b5e",
        "InterviewEndDate": "2023-04-18 12:54:48",
        "InterviewState": "Completed",
        "Flight": "EW 7783",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9cfe898b-3f2e-40a4-afd3-94a5b467917d",
        "InterviewEndDate": "2023-04-18 13:36:12",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b1d15148-27ae-4cde-b4dd-948c6a9bbecc",
        "InterviewEndDate": "2023-04-18 13:31:06",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dd41f71c-6db3-4cfe-82a2-82f8e2da013d",
        "InterviewEndDate": "2023-04-18 15:00:22",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5dd91068-984b-4830-a801-4099fd3c9f43",
        "InterviewEndDate": "2023-04-18 13:34:12",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "78d5f2cb-f07b-43ea-b7ea-78afbf5447ab",
        "InterviewEndDate": "2023-04-19 15:04:05",
        "InterviewState": "Completed",
        "Flight": "FR 8859",
        "Dest": "LIS",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d33ddfb9-f27f-4cef-a619-ad46d849343f",
        "InterviewEndDate": "2023-04-19 18:39:31",
        "InterviewState": "Completed",
        "Flight": "W6 2441",
        "Dest": "ATH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2594826c-a9e2-4ab5-a54f-d8cdfa83a720",
        "InterviewEndDate": "2023-04-18 14:56:02",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e89f45bf-29f5-4124-9ad4-e944fe26b2af",
        "InterviewEndDate": "2023-04-18 15:02:18",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9f84ec3f-078e-43e0-bb84-03f9c0709524",
        "InterviewEndDate": "2023-04-18 14:59:46",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ea99ca6e-0402-42a6-b3e4-802d60620d93",
        "InterviewEndDate": "2023-04-18 14:59:19",
        "InterviewState": "Completed",
        "Flight": "W6 2213",
        "Dest": "HRG",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "a6952c83-b74c-4c94-8911-743b161f9c6d",
        "InterviewEndDate": "2023-04-18 14:58:25",
        "InterviewState": "Completed",
        "Flight": "W6 2213",
        "Dest": "HRG",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6341c72f-9867-4304-b265-f823620c680b",
        "InterviewEndDate": "2023-04-18 15:03:40",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ca46c131-4c68-4d50-a834-791bfec0b3c8",
        "InterviewEndDate": "2023-04-23 14:26:11",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 10
    },
    {
        "InterviewId": "b390514d-77dc-4ede-b09e-e4f62baabef0",
        "InterviewEndDate": "2023-04-23 14:17:10",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 10
    },
    {
        "InterviewId": "cdc2ae63-9a3f-4453-a723-3556387edbf6",
        "InterviewEndDate": "2023-04-18 15:10:42",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9a45efab-8aed-4f80-a740-214a58422185",
        "InterviewEndDate": "2023-04-18 16:46:04",
        "InterviewState": "Completed",
        "Flight": "FR 2273",
        "Dest": "AGP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cceba215-59dd-4080-a71c-aed8fd5b44b0",
        "InterviewEndDate": "2023-04-18 16:38:53",
        "InterviewState": "Completed",
        "Flight": "FR 2273",
        "Dest": "AGP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8419e830-3a11-437e-a0ed-06bcd61cc86c",
        "InterviewEndDate": "2023-04-19 13:47:05",
        "InterviewState": "Completed",
        "Flight": "FR 1243",
        "Dest": "ATH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "799d0e73-2d98-4f16-8d9c-eb74dd41efe9",
        "InterviewEndDate": "2023-04-19 17:56:11",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9c729fe2-dece-42fd-8d2a-5cd0f0512c44",
        "InterviewEndDate": "2023-04-23 17:15:14",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "3b752fba-f2d1-4fda-b428-b12510f98e22",
        "InterviewEndDate": "2023-04-18 16:33:48",
        "InterviewState": "Completed",
        "Flight": "FR 2273",
        "Dest": "AGP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "114b83c5-2fd9-4fd1-a667-a6f40384db51",
        "InterviewEndDate": "2023-04-19 13:52:42",
        "InterviewState": "Completed",
        "Flight": "FR 1243",
        "Dest": "ATH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3843915e-a64e-4058-8593-3cf31a6cb789",
        "InterviewEndDate": "2023-04-23 13:44:28",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "52e6a87e-ac21-4074-910c-ea59f27a19d9",
        "InterviewEndDate": "2023-04-19 13:50:34",
        "InterviewState": "Completed",
        "Flight": "FR 1243",
        "Dest": "ATH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "81f078f2-2778-4762-a0e0-b3ae6e0939f5",
        "InterviewEndDate": "2023-04-19 13:50:05",
        "InterviewState": "Completed",
        "Flight": "FR 1243",
        "Dest": "ATH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f9dd9f22-626c-4f94-844a-9519852b07eb",
        "InterviewEndDate": "2023-04-19 17:42:52",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8510da4a-5b00-49c3-9f4b-7749afe8dc26",
        "InterviewEndDate": "2023-04-19 14:52:48",
        "InterviewState": "Completed",
        "Flight": "FR 8859",
        "Dest": "LIS",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1c919aaa-e98c-4fd4-933e-8a08c758e9c5",
        "InterviewEndDate": "2023-04-19 14:57:36",
        "InterviewState": "Completed",
        "Flight": "FR 8859",
        "Dest": "LIS",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bea4d25a-a65b-4e8f-ab4d-fb1c7b583dbc",
        "InterviewEndDate": "2023-04-19 17:59:56",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2db50b9e-3d7c-4f84-8d7f-c82ba62a7a17",
        "InterviewEndDate": "2023-04-19 17:55:25",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9770f707-61db-49a2-bcea-bf97dd1e9ddc",
        "InterviewEndDate": "2023-04-19 17:54:33",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "53716f8f-c5b4-4405-8999-52d1da1137b6",
        "InterviewEndDate": "2023-04-19 17:54:38",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "03c9a276-fbf7-4708-9a2c-a932251e93c3",
        "InterviewEndDate": "2023-04-19 18:07:12",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0d7d35b4-01d6-48b5-820e-f5c9120b775f",
        "InterviewEndDate": "2023-04-19 18:07:11",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d0cf5e7b-2e28-4ae4-94c1-db67cc5da8be",
        "InterviewEndDate": "2023-04-19 18:05:50",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6eae0e67-a304-4b36-80dd-d6dcf931e208",
        "InterviewEndDate": "2023-04-19 18:40:40",
        "InterviewState": "Completed",
        "Flight": "W6 2441",
        "Dest": "ATH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "34139031-cb65-4fec-8bcf-aeda97494a74",
        "InterviewEndDate": "2023-04-23 17:51:31",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b9312743-e59c-4bc0-99b2-4465bff42a59",
        "InterviewEndDate": "2023-04-26 10:48:26",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dbecb618-152f-42e7-a233-ed93c5cd8a41",
        "InterviewEndDate": "2023-04-19 19:18:36",
        "InterviewState": "Completed",
        "Flight": "FR 2020",
        "Dest": "PMO",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aef02ae8-e883-498b-8b17-4df70c09da8c",
        "InterviewEndDate": "2023-04-19 19:25:03",
        "InterviewState": "Completed",
        "Flight": "FR 2020",
        "Dest": "PMO",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ee466338-724e-486c-9c5c-c2f68c288b30",
        "InterviewEndDate": "2023-04-19 19:18:50",
        "InterviewState": "Completed",
        "Flight": "FR 2020",
        "Dest": "PMO",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "db466028-acb8-4d9d-a69e-a0a22da731e2",
        "InterviewEndDate": "2023-04-20 16:41:48",
        "InterviewState": "Completed",
        "Flight": "FR  605",
        "Dest": "CPH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5d90e02a-3858-4f8f-a95a-03b157760b46",
        "InterviewEndDate": "2023-04-20 15:16:32",
        "InterviewState": "Completed",
        "Flight": "TK 7747",
        "Dest": "SAW",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "587d4300-29ea-4d0b-be68-faf5b2660a17",
        "InterviewEndDate": "2023-04-20 21:28:13",
        "InterviewState": "Completed",
        "Flight": "FR 5190",
        "Dest": "BRI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0baa171a-b5d3-4f22-ba09-13ac9f5b95fa",
        "InterviewEndDate": "2023-04-20 15:17:41",
        "InterviewState": "Completed",
        "Flight": "TK 7747",
        "Dest": "SAW",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f0914a66-54f2-4c78-9ffe-bd1991f8987a",
        "InterviewEndDate": "2023-04-20 16:45:50",
        "InterviewState": "Completed",
        "Flight": "FR  605",
        "Dest": "CPH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d22bbb0c-966b-4dd8-9570-5fbc3ab89225",
        "InterviewEndDate": "2023-04-20 17:31:53",
        "InterviewState": "Completed",
        "Flight": "FR 6748",
        "Dest": "GOT",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bc1dbb55-7649-4d93-a37e-76467e21ae64",
        "InterviewEndDate": "2023-04-20 17:35:30",
        "InterviewState": "Completed",
        "Flight": "FR 6748",
        "Dest": "GOT",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fe0a6607-60af-4bea-85b8-a5adfdd0d730",
        "InterviewEndDate": "2023-04-20 17:27:56",
        "InterviewState": "Completed",
        "Flight": "FR 6748",
        "Dest": "GOT",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cd8bd0bf-9b9f-4f2e-9ae7-a21dda8dfeca",
        "InterviewEndDate": "2023-04-20 20:17:49",
        "InterviewState": "Completed",
        "Flight": "W6 2361",
        "Dest": "BRI",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4eed6a8b-3d68-47e7-993b-d7586aff1e0a",
        "InterviewEndDate": "2023-04-21 16:54:32",
        "InterviewState": "Completed",
        "Flight": "EZS1566",
        "Dest": "GVA",
        "AirlineCode": "EZS1566",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e7ccfd76-1f12-44fb-8cd0-2a90ab6b78c1",
        "InterviewEndDate": "2023-04-20 20:16:55",
        "InterviewState": "Completed",
        "Flight": "W6 2361",
        "Dest": "BRI",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e7a7922d-20bd-4724-9c03-1f86f79c9fa9",
        "InterviewEndDate": "2023-04-21 19:12:34",
        "InterviewState": "Completed",
        "Flight": "FR 6712",
        "Dest": "MAD",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "349292fa-3632-45fa-abe3-667f7b0ebec3",
        "InterviewEndDate": "2023-04-20 21:23:12",
        "InterviewState": "Completed",
        "Flight": "FR 5190",
        "Dest": "BRI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "43fc0a3d-f669-4e30-9edb-abdebe1de7d6",
        "InterviewEndDate": "2023-04-23 12:34:06",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cb57081a-c074-4c66-a538-c2ddebe6923d",
        "InterviewEndDate": "2023-04-21 16:56:37",
        "InterviewState": "Completed",
        "Flight": "EZS1566",
        "Dest": "GVA",
        "AirlineCode": "EZS1566",
        "InterviewerID": 1
    },
    {
        "InterviewId": "59b8cf94-1056-4793-a592-f87f50779848",
        "InterviewEndDate": "2023-04-21 16:56:50",
        "InterviewState": "Completed",
        "Flight": "EZS1566",
        "Dest": "GVA",
        "AirlineCode": "EZS1566",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cbcac0bb-c810-410d-89f0-36d648adfc66",
        "InterviewEndDate": "2023-04-21 19:10:27",
        "InterviewState": "Completed",
        "Flight": "FR 6712",
        "Dest": "MAD",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "023b5950-84c2-47c8-bf0f-7aadae7886a0",
        "InterviewEndDate": "2023-04-23 12:22:02",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "abf033e8-85bc-40e8-a24c-a42a0bd38a5b",
        "InterviewEndDate": "2023-04-23 12:23:07",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "549497bb-2363-4632-afe9-96192ab79aa0",
        "InterviewEndDate": "2023-04-23 12:30:33",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cbdb07a1-492f-4d35-9205-50c917c3034d",
        "InterviewEndDate": "2023-04-23 12:34:42",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8ce66b69-85b9-479f-90b8-8bdb5821d16e",
        "InterviewEndDate": "2023-04-23 12:31:11",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ffdbfb09-9dc9-49c6-98de-ad5d6fa1dedd",
        "InterviewEndDate": "2023-04-23 13:30:40",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "06e8dfe4-1bdf-4495-bbf0-1b650c673a06",
        "InterviewEndDate": "2023-04-23 13:33:14",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7db6527b-e7a2-427c-91d6-f3449b5c7acc",
        "InterviewEndDate": "2023-04-23 13:32:00",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d1c72ba7-b799-41cf-bc0a-2faccfb2a8ab",
        "InterviewEndDate": "2023-04-23 13:32:44",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "84d8c03f-0d58-4b05-acac-7a36f5e5f414",
        "InterviewEndDate": "2023-04-23 13:32:25",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a7eac902-9696-4b7d-a97c-7c00bd333d49",
        "InterviewEndDate": "2023-04-23 14:45:36",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b005de64-ba34-4fa0-8c93-edf1c14f77ec",
        "InterviewEndDate": "2023-04-23 13:55:24",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "33c79df0-946b-4538-bcc7-66e1c9beaf9c",
        "InterviewEndDate": "2023-04-23 17:49:35",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "be3b5adb-fa6b-4900-8cd7-8588495b14b7",
        "InterviewEndDate": "2023-04-23 14:27:10",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 10
    },
    {
        "InterviewId": "f62971a4-ea80-4a38-89d1-ee687149d867",
        "InterviewEndDate": "2023-04-23 14:46:42",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4a7d6c2d-2832-43f9-bf39-30ee13f95381",
        "InterviewEndDate": "2023-04-23 14:45:41",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fcad1e9d-3a27-42b7-97fe-e8684bc84467",
        "InterviewEndDate": "2023-04-23 14:47:41",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f98e238b-699a-492b-8316-30c7dae3a02e",
        "InterviewEndDate": "2023-04-23 14:42:49",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2288a7d1-3172-44b0-8ee3-578d0a5c0f27",
        "InterviewEndDate": "2023-04-23 17:33:34",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dbb2b29a-6e37-494f-acd6-e6ec4af42ee7",
        "InterviewEndDate": "2023-04-23 17:37:20",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e6f8c7b8-c8e9-4df6-a2e0-c5f34e5c7780",
        "InterviewEndDate": "2023-04-23 17:31:16",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e4fa364b-419c-4971-96a6-568b7febff06",
        "InterviewEndDate": "2023-04-23 17:33:23",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "28e33d3b-874a-401c-b3dc-38b7a56c6b27",
        "InterviewEndDate": "2023-04-23 17:12:22",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "69fde93c-90c6-42a2-859a-9bcc629bc02d",
        "InterviewEndDate": "2023-04-23 17:18:14",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "0773e6b8-ccee-4c3c-8ec1-30f2dea3ec8b",
        "InterviewEndDate": "2023-04-23 17:19:42",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "90f64cf9-669f-4167-956c-f2cb6ef610e0",
        "InterviewEndDate": "2023-04-25 16:59:03",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "74a6c774-130b-49f4-a6f8-fa8fbc2d0553",
        "InterviewEndDate": "2023-04-25 17:03:42",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3a192186-c5f8-43ed-8248-ca8c3d233d2e",
        "InterviewEndDate": "2023-04-24 14:51:59",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 7
    },
    {
        "InterviewId": "48b9de20-4d1a-4e67-a9fa-8779a84771e0",
        "InterviewEndDate": "2023-04-23 17:34:44",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e7d654f1-83d4-4b3a-8eff-d219cd613389",
        "InterviewEndDate": "2023-04-26 11:34:06",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2118c6e7-5ad5-4b12-be6d-a0b6f0adf2c8",
        "InterviewEndDate": "2023-04-24 09:12:46",
        "InterviewState": "Completed",
        "Flight": "EW 7785",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fcaa6dd1-882f-4a1e-b1bd-cdd9707a8231",
        "InterviewEndDate": "2023-04-24 09:19:01",
        "InterviewState": "Completed",
        "Flight": "EW 7785",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "af17e1a0-4379-4e26-a50a-f43908637096",
        "InterviewEndDate": "2023-04-24 09:12:32",
        "InterviewState": "Completed",
        "Flight": "EW 7785",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3e68843f-7751-41c5-811c-8df638f63d30",
        "InterviewEndDate": "2023-04-24 15:04:51",
        "InterviewState": "Completed",
        "Flight": "FR 5023",
        "Dest": "PSA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7d60d365-e723-4e73-9275-a22123863a66",
        "InterviewEndDate": "2023-04-26 15:05:31",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9fefeebd-a03f-48e1-a4aa-6d7e3f0d84d3",
        "InterviewEndDate": "2023-04-26 14:54:29",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3c33b06d-4dd4-4139-8f4d-7a55cf1160ca",
        "InterviewEndDate": "2023-04-24 14:56:50",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 7
    },
    {
        "InterviewId": "e0b1148b-56e5-4aee-bfce-4f60f7b145f3",
        "InterviewEndDate": "2023-04-24 14:54:50",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4d0e2e9c-be46-42f1-a1bb-cae541a54df8",
        "InterviewEndDate": "2023-04-24 15:00:49",
        "InterviewState": "Completed",
        "Flight": "FR 5023",
        "Dest": "PSA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8dd1c291-fbf6-424b-852d-76bca1500f2c",
        "InterviewEndDate": "2023-04-24 15:01:52",
        "InterviewState": "Completed",
        "Flight": "FR 5023",
        "Dest": "PSA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "21727f8b-94f2-449d-8b70-c1cf468fd22f",
        "InterviewEndDate": "2023-04-24 15:01:13",
        "InterviewState": "Completed",
        "Flight": "FR 5023",
        "Dest": "PSA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "340acb7b-f867-43a2-b2bc-f11e79a786bf",
        "InterviewEndDate": "2023-04-25 17:00:44",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "1b83c2a1-d781-475d-8635-6800101cfb8e",
        "InterviewEndDate": "2023-04-24 15:01:30",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 7
    },
    {
        "InterviewId": "68f5803b-3130-40ef-827d-df8680c8a6f4",
        "InterviewEndDate": "2023-04-25 05:16:35",
        "InterviewState": "Completed",
        "Flight": "W6 2247",
        "Dest": "KUT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "de03c09f-a362-4da3-8f81-fd941293b583",
        "InterviewEndDate": "2023-04-25 05:04:19",
        "InterviewState": "Completed",
        "Flight": "W6 2247",
        "Dest": "KUT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "89a35cda-038f-4fb8-a617-3ab363235a19",
        "InterviewEndDate": "2023-04-25 05:16:54",
        "InterviewState": "Completed",
        "Flight": "W6 2247",
        "Dest": "KUT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d594866b-979a-4a35-9d70-4b2f28e0ac85",
        "InterviewEndDate": "2023-04-25 05:17:22",
        "InterviewState": "Completed",
        "Flight": "W6 2247",
        "Dest": "KUT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aaa05e8c-71c9-441e-987e-48b32275f8e2",
        "InterviewEndDate": "2023-04-26 15:02:28",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aaa8e13a-5ea9-4667-b0fa-fe5487fff995",
        "InterviewEndDate": "2023-04-25 07:32:30",
        "InterviewState": "Completed",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4ac99b91-f1f1-4d84-bc68-d230a0c57f71",
        "InterviewEndDate": "2023-04-25 06:10:15",
        "InterviewState": "Completed",
        "Flight": "W6 2499",
        "Dest": "GYD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5993276d-d87d-496e-888b-cff4cebb9e63",
        "InterviewEndDate": "2023-04-25 06:13:11",
        "InterviewState": "Completed",
        "Flight": "W6 2499",
        "Dest": "GYD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c128835b-d9c2-4c06-a9f8-160ee1f5f8ba",
        "InterviewEndDate": "2023-04-25 06:06:44",
        "InterviewState": "Completed",
        "Flight": "W6 2499",
        "Dest": "GYD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "adeda3f1-3be3-4513-b718-27df13ace67c",
        "InterviewEndDate": "2023-04-25 07:29:57",
        "InterviewState": "Completed",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f431c914-83a5-43f8-b30d-a575df2f51e9",
        "InterviewEndDate": "2023-04-25 07:27:10",
        "InterviewState": "Completed",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0ee7350c-cd19-43c7-8f14-f1e0b139b50d",
        "InterviewEndDate": "2023-04-25 07:26:39",
        "InterviewState": "Completed",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a06ec37a-f7d6-4808-bad5-70aa11011ed4",
        "InterviewEndDate": "2023-04-25 07:29:59",
        "InterviewState": "Completed",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cb3a79fa-fdc8-4101-9d0c-2efdaa87c741",
        "InterviewEndDate": "2023-04-26 10:51:16",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3cde17b5-a1a1-48d9-a718-6f46e394f3bb",
        "InterviewEndDate": "2023-04-26 10:27:02",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1a4913fd-f50f-4950-817d-b8c686d169a9",
        "InterviewEndDate": "2023-04-26 10:49:26",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "00932efb-5d4d-4a7c-aab8-0219de5b873b",
        "InterviewEndDate": "2023-04-25 10:08:31",
        "InterviewState": "Completed",
        "Flight": "LH 1335",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d1f4cdc3-a6d2-40e5-b343-072117de9e22",
        "InterviewEndDate": "2023-04-25 10:08:51",
        "InterviewState": "Completed",
        "Flight": "LH 1335",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "09e237ee-1770-421b-8735-22345c469eab",
        "InterviewEndDate": "2023-04-25 10:34:18",
        "InterviewState": "Completed",
        "Flight": "LH 1675",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "72a329bd-c4eb-4bc1-bb46-1c80b97fb610",
        "InterviewEndDate": "2023-04-25 10:43:44",
        "InterviewState": "Completed",
        "Flight": "LH 1675",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "65aceb29-bea6-47dd-b785-9ce4702b00f8",
        "InterviewEndDate": "2023-04-26 10:22:06",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8eb6aa33-f605-459d-8ff8-2fed36b8ef6b",
        "InterviewEndDate": "2023-04-26 10:29:03",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "72e0fd97-a565-4e97-84c8-b1cd31ba2b97",
        "InterviewEndDate": "2023-04-25 16:56:12",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "978428b2-0047-4f83-a8f8-517c6e1b9858",
        "InterviewEndDate": "2023-04-25 17:00:15",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6ce33e6e-17a1-42ca-b1c2-8a2f5c04b082",
        "InterviewEndDate": "2023-04-25 17:06:55",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "d0c4c8ac-767e-4703-9d93-4e3795f0159d",
        "InterviewEndDate": "2023-04-26 10:28:04",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "94a7c7f8-4473-4cb2-bdd8-2d1903f63827",
        "InterviewEndDate": "2023-04-26 10:50:16",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3a9deaa8-d355-4079-a5aa-7b19fabc4259",
        "InterviewEndDate": "2023-04-26 10:47:39",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f279ceda-aeef-412a-818e-3d30965ce924",
        "InterviewEndDate": "2023-04-26 10:59:18",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "107eea87-0ff6-4085-9240-a594e0b54bf1",
        "InterviewEndDate": "2023-04-26 11:17:06",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "75ac198b-06e8-4ad8-8763-7d84d550a2cf",
        "InterviewEndDate": "2023-04-26 11:22:31",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5a27edb8-0429-4e23-9d6f-fc35ce1cadb5",
        "InterviewEndDate": "2023-04-26 11:18:27",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "48300627-df01-47a9-8ad1-3370f2188fbf",
        "InterviewEndDate": "2023-04-26 11:19:00",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "160bae74-7504-41e0-ab72-01998a676037",
        "InterviewEndDate": "2023-04-26 11:20:27",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3aac3c63-3a35-48b0-825e-92da29885727",
        "InterviewEndDate": "2023-04-26 11:22:14",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b10f0912-6c9c-4465-8f84-d135735ea4a6",
        "InterviewEndDate": "2023-04-26 11:32:46",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1b7ddebc-1510-4473-8679-c6bb35ad2290",
        "InterviewEndDate": "2023-04-26 14:48:56",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "19b588b7-8bef-4e7b-ad5b-3a7687743c60",
        "InterviewEndDate": "2023-04-26 14:44:17",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "129dfa92-4768-4507-a856-7bdabc049b70",
        "InterviewEndDate": "2023-04-26 14:42:36",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3a3742f7-ec44-4725-88c4-3cc672f00cd3",
        "InterviewEndDate": "2023-04-26 14:48:45",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3edb0612-0b2b-4e3f-be1e-0ba7020c85d0",
        "InterviewEndDate": "2023-04-26 15:03:02",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4e00b77a-0ea9-492b-9b4c-85650d6c4020",
        "InterviewEndDate": "2023-04-26 14:49:07",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e1b82313-9c37-4d62-9cd4-4a23ea02b16b",
        "InterviewEndDate": "2023-04-26 14:51:02",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ac13153a-6e3f-424b-a355-3a0df7572a89",
        "InterviewEndDate": "2023-04-26 16:40:05",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "da90146b-e656-4831-a138-ee636fc60608",
        "InterviewEndDate": "2023-04-26 16:37:36",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "80ac36da-2878-4771-80c2-01a7c814f6cb",
        "InterviewEndDate": "2023-04-26 16:35:44",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "91501f31-32dc-4826-a089-0e07fbdfbf1c",
        "InterviewEndDate": "2023-04-26 16:32:38",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7989ec4d-f8f6-435c-aa65-380475094850",
        "InterviewEndDate": "2023-04-26 16:23:56",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fb0ace2c-c3f9-403f-9cd3-b0e3c375b9a8",
        "InterviewEndDate": "2023-04-26 16:25:49",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7db4268a-3660-4ed1-bd12-8a1b815be2c1",
        "InterviewEndDate": "2023-04-26 16:25:20",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "899ef7b1-70b4-49dc-bbc9-9e6cb4052d3e",
        "InterviewEndDate": "2023-04-26 16:24:56",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f097202a-ce71-4010-ad51-905ec083b3f0",
        "InterviewEndDate": "2023-04-26 16:24:38",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8bc7d31e-d8ce-40ae-a0c9-e2eb53940091",
        "InterviewEndDate": "2023-04-27 11:44:30",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1060bfb1-de4f-455b-91d5-bf2b70eccb7d",
        "InterviewEndDate": "2023-04-27 09:35:46",
        "InterviewState": "Completed",
        "Flight": "FR 8357",
        "Dest": "MAN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "23a9c04a-be19-4d8f-a8f2-76822e6187b8",
        "InterviewEndDate": "2023-04-27 09:35:29",
        "InterviewState": "Completed",
        "Flight": "FR 8357",
        "Dest": "MAN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "43a039c3-bf3c-48f7-8e21-85d9d7bcdc17",
        "InterviewEndDate": "2023-04-27 09:39:06",
        "InterviewState": "Completed",
        "Flight": "FR 8357",
        "Dest": "MAN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aecc347a-9679-4f6f-9800-d930429ecd5f",
        "InterviewEndDate": "2023-04-27 09:35:47",
        "InterviewState": "Completed",
        "Flight": "FR 8357",
        "Dest": "MAN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d1e7b3b9-b481-4ec7-8e5e-a25a8c2e20ff",
        "InterviewEndDate": "2023-04-27 09:42:58",
        "InterviewState": "Completed",
        "Flight": "FR 8357",
        "Dest": "MAN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "49bb0972-2519-4626-a919-5e8affe56f02",
        "InterviewEndDate": "2023-04-27 11:02:15",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "318aaeaf-e6d2-4511-8e56-7759c4ef43be",
        "InterviewEndDate": "2023-04-27 11:05:27",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7baed801-e33b-450b-86fc-a2b33929e22c",
        "InterviewEndDate": "2023-04-27 11:02:08",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aa4d2382-aa7d-4d0e-9071-3f1a34252305",
        "InterviewEndDate": "2023-04-27 11:05:43",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3627a5ad-de69-49c2-9e0f-ffbb057d733b",
        "InterviewEndDate": "2023-04-27 11:00:07",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "82114c90-76cd-4124-85be-7a43e3d4ccb4",
        "InterviewEndDate": "2023-04-27 11:37:59",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5cd4bdda-1317-497f-8cd7-1ff67e624851",
        "InterviewEndDate": "2023-04-27 11:39:03",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "130470cb-1ece-4cad-81af-d1b52d651a77",
        "InterviewEndDate": "2023-04-27 11:40:54",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "04b325b6-4af4-45a4-9cb8-f973ffd5055b",
        "InterviewEndDate": "2023-04-27 11:35:49",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0da68b8e-6257-4d3e-8850-ad672ccb92a3",
        "InterviewEndDate": "2023-04-27 11:35:02",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0a93d9d5-fce2-453e-9675-c3ddf7eeef61",
        "InterviewEndDate": "2023-04-27 11:43:04",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0ad6c6d8-b703-4d06-b6c1-8aefda83a0bd",
        "InterviewEndDate": "2023-04-27 11:48:36",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "03231f18-3d85-41dc-a67c-7d23ea77558c",
        "InterviewEndDate": "2023-04-28 09:26:32",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3ff49d32-4914-4017-8066-58df44ff1ef8",
        "InterviewEndDate": "2023-04-28 15:30:29",
        "InterviewState": "Completed",
        "Flight": "FR 1923",
        "Dest": "WMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "53c6e611-3fa0-4e92-b1ed-763add3654bb",
        "InterviewEndDate": "2023-04-28 06:14:17",
        "InterviewState": "Completed",
        "Flight": "W6 2271",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "2144f2f2-ff12-4b83-ad9c-7f964bbfb38f",
        "InterviewEndDate": "2023-04-28 06:25:27",
        "InterviewState": "Completed",
        "Flight": "W6 2271",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "5d1dcbc9-deec-45d2-b8eb-5ddc65613a26",
        "InterviewEndDate": "2023-04-28 06:31:01",
        "InterviewState": "Completed",
        "Flight": "W6 2271",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "5f7d4298-6bd0-42e2-a53d-78e88ca3044d",
        "InterviewEndDate": "2023-04-28 09:21:42",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "31778951-3b76-429e-9808-e82685480bdb",
        "InterviewEndDate": "2023-04-28 14:21:17",
        "InterviewState": "Completed",
        "Flight": "FR 5254",
        "Dest": "RMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b2034ee5-1e99-4877-8f93-18b9280c67d5",
        "InterviewEndDate": "2023-04-28 15:33:43",
        "InterviewState": "Completed",
        "Flight": "FR 1923",
        "Dest": "WMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f2ad2898-8b18-40dd-8e51-47998c68a14f",
        "InterviewEndDate": "2023-04-28 14:10:34",
        "InterviewState": "Completed",
        "Flight": "FR 5254",
        "Dest": "RMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4f208eef-08d3-455d-bf55-b761d63c19df",
        "InterviewEndDate": "2023-04-28 14:18:32",
        "InterviewState": "Completed",
        "Flight": "FR 5254",
        "Dest": "RMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d83d63a7-74ee-4243-b9f6-c4d4a319ee44",
        "InterviewEndDate": "2023-04-28 15:44:14",
        "InterviewState": "Completed",
        "Flight": "FR 1923",
        "Dest": "WMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "30e2c716-9aec-46dc-b034-d508ba4aac3a",
        "InterviewEndDate": "2023-04-28 15:29:05",
        "InterviewState": "Completed",
        "Flight": "FR 1923",
        "Dest": "WMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    }
]    

 `;