let interview_data_raw = `[
    {
        "InterviewId": "c9054087-32fa-43e6-9e2a-b10932c2b2a9",
        "InterviewEndDate": "2023-04-05 18:46:54",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 12,
        "download_time": "23-04-2023 12:47:52"
    },
    {
        "InterviewId": "5c09e1d9-c741-4fb7-a9d4-4a198a8dc8f4",
        "InterviewEndDate": "2023-03-31 09:36:19",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "34a25ff2-d7ea-4e88-9777-2f780b6ffb95",
        "InterviewEndDate": "2023-03-31 09:42:42",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4cbd0758-20cc-4d77-b765-7355624dedd9",
        "InterviewEndDate": "2023-03-31 09:42:53",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b7c1da1a-073a-4e91-a701-b510bb9bcfe5",
        "InterviewEndDate": "2023-03-31 09:46:06",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d66414a4-5237-4f38-9fc3-5d924aeaa880",
        "InterviewEndDate": "2023-03-31 09:44:20",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "390c21c0-deb1-4af4-ab53-7cd5222884cb",
        "InterviewEndDate": "2023-03-31 09:37:59",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9c72836b-e203-41a8-bab4-a5e948ee350d",
        "InterviewEndDate": "2023-03-31 09:50:34",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "9bf89772-7eed-4375-9924-065a1d0b9634",
        "InterviewEndDate": "2023-03-31 09:46:09",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "52fe04a9-8a3c-4dbe-acb7-58cb9f2753d5",
        "InterviewEndDate": "2023-03-31 09:41:46",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "cd22841f-efbf-481d-919d-6f5b1c6bc408",
        "InterviewEndDate": "2023-03-31 09:43:57",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "0dcf4c07-6e3c-49b6-b9a7-8c794314b55a",
        "InterviewEndDate": "2023-03-31 09:46:54",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9d7a48fe-2929-4e85-9564-346ad76797f6",
        "InterviewEndDate": "2023-03-31 09:53:41",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7b13fd2a-59a0-4a26-ad2d-d96d9eed774d",
        "InterviewEndDate": "2023-03-31 09:54:53",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "14cd2ce8-1688-4a3d-be33-1c2a2137b937",
        "InterviewEndDate": "2023-03-31 09:52:54",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "8277310c-fc06-439d-b8e3-780b1c444daf",
        "InterviewEndDate": "2023-03-31 09:50:49",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6f6b594e-47e2-4df6-81d4-655369bcbf3b",
        "InterviewEndDate": "2023-03-31 09:55:27",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "59ffafef-2bea-4f7a-8d45-488d6e9e67e0",
        "InterviewEndDate": "2023-03-31 09:59:04",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "ec54f2a1-6841-4d46-9618-9acb66d64a2f",
        "InterviewEndDate": "2023-03-31 10:21:57",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fc61e28d-d3d0-4e9f-8395-ac83730e798d",
        "InterviewEndDate": "2023-03-31 10:27:34",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "978eecbd-d637-43cf-b057-f09b372a5a0a",
        "InterviewEndDate": "2023-03-31 10:18:30",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ffeb7d34-64a1-4b5c-a673-befafc36ff62",
        "InterviewEndDate": "2023-03-31 10:28:45",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "afe7b24d-2ea2-48fe-a8b2-e945d776cf10",
        "InterviewEndDate": "2023-03-31 10:33:59",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "14e585bd-d736-456d-97d6-fc95a69b7308",
        "InterviewEndDate": "2023-03-31 10:29:09",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "8b106bf1-fba8-4ac8-944c-8091dc294a8b",
        "InterviewEndDate": "2023-03-31 10:18:09",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "781b64dc-db57-46be-b032-6abfdecf169d",
        "InterviewEndDate": "2023-03-31 10:19:45",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "37c457c4-c4c1-4c4d-85df-457938e682e4",
        "InterviewEndDate": "2023-03-31 10:23:03",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fa9cc138-5d87-4dfd-ac54-698eb1b8b201",
        "InterviewEndDate": "2023-03-31 10:40:29",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "b2ce8907-a320-4749-8a6c-9d7801b3e504",
        "InterviewEndDate": "2023-03-31 10:30:04",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a6d4ccd8-9a87-4dff-a848-029dd04d39b3",
        "InterviewEndDate": "2023-03-31 10:31:13",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fb4bc197-f21c-4a0f-abce-5d3b2167675b",
        "InterviewEndDate": "2023-03-31 10:35:47",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "76e4360a-e933-46cd-9e59-8e53bd7eb7c4",
        "InterviewEndDate": "2023-03-31 10:36:25",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5d5bee34-0c1b-4cba-b0cd-e14e06486932",
        "InterviewEndDate": "2023-03-31 10:56:24",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "71965725-8244-4754-b124-5f095b7db868",
        "InterviewEndDate": "2023-03-31 11:14:25",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d87ebfbc-af92-4c2b-81ef-0caca37d4c33",
        "InterviewEndDate": "2023-03-31 10:46:05",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "ad6c1cef-4c0d-4a6c-9d89-9b57aa8ddcac",
        "InterviewEndDate": "2023-03-31 11:21:40",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1c09a0ac-395b-4942-8689-c914e133affa",
        "InterviewEndDate": "2023-03-31 11:13:46",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c41b0d45-c54c-4600-8415-bbe6590e333c",
        "InterviewEndDate": "2023-03-31 11:13:28",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "724bdaf9-75c2-4389-ab67-008307df726f",
        "InterviewEndDate": "2023-03-31 11:14:34",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "47c3a04a-6a55-4e39-ba56-82cd8cd47a9f",
        "InterviewEndDate": "2023-03-31 11:14:51",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 14
    },
    {
        "InterviewId": "dd62fbb7-6d57-457d-978a-672f7c0db617",
        "InterviewEndDate": "2023-03-31 11:13:36",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 14
    },
    {
        "InterviewId": "0a8b508d-ba9b-4957-ba4a-7100a4fec081",
        "InterviewEndDate": "2023-03-31 11:16:44",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 14
    },
    {
        "InterviewId": "fd758560-a467-4836-bf33-ea7d6df00092",
        "InterviewEndDate": "2023-03-31 11:18:19",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 14
    },
    {
        "InterviewId": "3e260ef1-e2c1-4ea7-b371-748ae3c4f270",
        "InterviewEndDate": "2023-03-31 11:15:29",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 14
    },
    {
        "InterviewId": "8116bc1e-7a45-4a37-b280-2259e1f40bfc",
        "InterviewEndDate": "2023-03-31 12:11:06",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "558aff26-573d-462f-a57b-2ca7e578b171",
        "InterviewEndDate": "2023-03-31 12:05:01",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "84e9fb14-fecc-497d-9065-a578a206973e",
        "InterviewEndDate": "2023-03-31 11:54:34",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "8441dcac-a4f7-4576-8cb7-014ce3678ebf",
        "InterviewEndDate": "2023-03-31 12:04:02",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f8ff6a37-2018-4dd6-8136-568072442739",
        "InterviewEndDate": "2023-03-31 12:06:52",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "408de04f-5d31-42e7-919d-ad442a8d063d",
        "InterviewEndDate": "2023-03-31 11:55:05",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "c6b70be8-c6a4-46fa-a06d-a20d5a431f68",
        "InterviewEndDate": "2023-03-31 11:54:01",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "068146d5-931e-4bc0-bc0b-b3d877b4c2a3",
        "InterviewEndDate": "2023-03-31 12:09:06",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b1e84045-b49b-4018-9baa-77bd8af8e109",
        "InterviewEndDate": "2023-03-31 11:53:37",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "e5bd8146-67f9-4d33-913c-0006432af08b",
        "InterviewEndDate": "2023-03-31 11:56:20",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "6b17a5b0-5e6c-47d6-93d0-0ed87a11d943",
        "InterviewEndDate": "2023-03-31 12:11:40",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "39f63019-74bd-456b-b4f4-2d9ef77e574c",
        "InterviewEndDate": "2023-03-31 12:04:06",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "41b350a8-7225-4770-b2cb-156e592451bf",
        "InterviewEndDate": "2023-03-31 12:17:44",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "7b405477-924a-4899-9050-9d586d33169e",
        "InterviewEndDate": "2023-03-31 12:09:05",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "042e46c3-e1a3-450b-af95-cff7d7f2dfae",
        "InterviewEndDate": "2023-03-31 12:20:45",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "de424247-681b-498d-81bd-207e5f9d79a2",
        "InterviewEndDate": "2023-03-31 12:13:39",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6278d001-d6f8-4c21-83db-846c2d9c4597",
        "InterviewEndDate": "2023-03-31 12:18:49",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "95c7b9fa-8e06-475f-a3e4-736fcd7fb670",
        "InterviewEndDate": "2023-03-31 12:24:22",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5b9094e7-35cf-495e-a976-3e17a36fde75",
        "InterviewEndDate": "2023-03-31 13:25:31",
        "InterviewState": "Completed",
        "Flight": "EJU4076",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2abc48f0-0d89-47ba-aae7-95faa36c5b03",
        "InterviewEndDate": "2023-03-31 12:19:28",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "3e766a0b-4be8-41c6-bf94-01bece051ce6",
        "InterviewEndDate": "2023-03-31 13:17:56",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c9bcd97f-db50-4971-9950-b309e77bad32",
        "InterviewEndDate": "2023-03-31 13:19:51",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e6bef65b-2213-4f04-a99a-ebaeaa6f7d99",
        "InterviewEndDate": "2023-03-31 13:18:33",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c93b2382-c765-4010-a14a-c557d2bd4c6d",
        "InterviewEndDate": "2023-03-31 13:16:43",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "6a9b2145-5693-4e36-8782-466e2391cca8",
        "InterviewEndDate": "2023-03-31 13:20:40",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2875e7df-e065-42af-8633-d6762fa61d6e",
        "InterviewEndDate": "2023-03-31 13:17:31",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "de529a61-1e83-43b6-83e4-f580d083b246",
        "InterviewEndDate": "2023-03-31 13:22:37",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "0a95861a-34bf-4224-9a4b-02c2840b0a65",
        "InterviewEndDate": "2023-03-31 13:25:35",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2b17217a-5a59-4846-9857-1019cdd3ae31",
        "InterviewEndDate": "2023-03-31 13:29:11",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "072e33dc-ed77-481b-8bf5-74280d9b8189",
        "InterviewEndDate": "2023-03-31 13:35:20",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "8d37d22c-f72d-44b2-9bc6-7232b7b52985",
        "InterviewEndDate": "2023-03-31 13:33:59",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "19d4856b-c407-430b-8b5d-5aee977d218c",
        "InterviewEndDate": "2023-03-31 13:32:47",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a302f078-00c5-49dd-8de9-408105b1d7de",
        "InterviewEndDate": "2023-03-31 13:32:29",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8f263014-179d-4bb8-8e45-6682fe8269b1",
        "InterviewEndDate": "2023-03-31 14:35:47",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "d1a5abfa-dd2d-4b55-91b5-26b3e3d8f212",
        "InterviewEndDate": "2023-03-31 14:04:07",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a135d8e9-41fa-45a6-bf23-2ce396e11c1c",
        "InterviewEndDate": "2023-03-31 14:07:36",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2244bf42-7b94-4684-8c4e-b28de18e22e6",
        "InterviewEndDate": "2023-03-31 14:01:05",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "d96495a1-6cf3-4458-890d-f3c2b79117b0",
        "InterviewEndDate": "2023-03-31 13:57:11",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6455c8ca-780d-4c8f-b406-ced5c8fd1f74",
        "InterviewEndDate": "2023-03-31 14:00:04",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "968edecb-c58c-42eb-8300-247e6d81a66a",
        "InterviewEndDate": "2023-03-31 14:28:20",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "52320841-0cf1-41d5-9996-06e924fd92e6",
        "InterviewEndDate": "2023-03-31 14:03:41",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "c39f2ed3-f781-4819-b785-ca29a8eb1fd1",
        "InterviewEndDate": "2023-03-31 14:32:53",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7300fb5c-8a5d-454a-9c4b-dbff38304b14",
        "InterviewEndDate": "2023-03-31 14:29:51",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bfa4c020-4039-4274-be33-3f411f500b6a",
        "InterviewEndDate": "2023-03-31 14:31:08",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "9bbdcdb2-079a-4308-a6b7-a832efc64dd9",
        "InterviewEndDate": "2023-03-31 14:30:19",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3d8e6b31-dc85-42ca-8243-ec39d2a47c2f",
        "InterviewEndDate": "2023-03-31 14:28:20",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0efe69b7-5d0a-49f2-8a3e-747f063e1c91",
        "InterviewEndDate": "2023-03-31 14:30:32",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2e5025ee-14b6-4e13-9303-3e8a5e7b4e8f",
        "InterviewEndDate": "2023-03-31 14:54:32",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c8b43c09-ae29-4726-ad78-6ce8803b83ca",
        "InterviewEndDate": "2023-03-31 14:38:09",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fc1b36f7-bbec-4cb7-a97e-fd84c10aa5cf",
        "InterviewEndDate": "2023-03-31 14:57:59",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 1
    },
    {
        "InterviewId": "427f749c-75df-46b8-9a3e-d2b38efddc61",
        "InterviewEndDate": "2023-03-31 15:01:14",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 1
    },
    {
        "InterviewId": "82ee64c3-13d7-4f53-aa93-c1252d9763d4",
        "InterviewEndDate": "2023-03-31 14:59:10",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a63a22d0-9048-4a54-912c-314b778165c4",
        "InterviewEndDate": "2023-03-31 14:50:10",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "a9f3938e-ccde-420d-89b3-c3b253ed45a6",
        "InterviewEndDate": "2023-03-31 14:50:40",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "748ae1ab-d166-444a-bf38-873ab7d6c86f",
        "InterviewEndDate": "2023-03-31 14:50:57",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "9818897d-1f52-4320-93f9-09ad6774b1dc",
        "InterviewEndDate": "2023-03-31 14:55:50",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "e3e86d63-7659-4800-af62-c361d0c81c17",
        "InterviewEndDate": "2023-03-31 14:59:36",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "fc4970d9-1385-4c9e-8d42-352bdfba239e",
        "InterviewEndDate": "2023-04-01 15:03:52",
        "InterviewState": "Completed",
        "Flight": "LH  191",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "26ac0440-1a2f-49dd-be19-bea428057dfe",
        "InterviewEndDate": "2023-03-31 15:04:34",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2a5cef16-7068-4d81-94e9-b010c8ef4a88",
        "InterviewEndDate": "2023-03-31 15:31:05",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "569dd7a1-eba9-465d-a17c-fd8ca190579c",
        "InterviewEndDate": "2023-03-31 15:35:50",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0d0a103e-4e17-409c-aaf2-f33ce4d330e7",
        "InterviewEndDate": "2023-03-31 15:32:30",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5ef72cd7-bb78-4591-825c-c59a51569ce2",
        "InterviewEndDate": "2023-03-31 15:38:08",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "faf14dd4-4b73-4f5e-9ad5-9659d2c154c1",
        "InterviewEndDate": "2023-03-31 15:28:07",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3352978f-04d6-4a1a-a1bf-a113a67a8de3",
        "InterviewEndDate": "2023-03-31 15:25:41",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "64df373f-c40a-4fc7-adc9-a051eff58fa0",
        "InterviewEndDate": "2023-03-31 15:24:12",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "929ebd8b-9666-4d0e-af0a-04e1d5f6ebaa",
        "InterviewEndDate": "2023-03-31 15:30:06",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "5f59a081-211c-4c74-bfd4-06a79348ebb5",
        "InterviewEndDate": "2023-03-31 15:27:20",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2d0d8126-efdd-4f46-ad5f-83049c4ba208",
        "InterviewEndDate": "2023-04-01 15:09:52",
        "InterviewState": "Completed",
        "Flight": "LH  191",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2dabeaa4-9279-4b2c-9e0f-2c403fcecd45",
        "InterviewEndDate": "2023-04-01 15:36:07",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e1468681-cad8-496b-9381-d86ab1f4554e",
        "InterviewEndDate": "2023-04-01 15:06:13",
        "InterviewState": "Completed",
        "Flight": "LH  191",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d2b168f0-c058-4780-a28e-2a1d9ecfd206",
        "InterviewEndDate": "2023-04-01 15:31:26",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "476dce9d-e499-437a-aa8a-043a6e5f0443",
        "InterviewEndDate": "2023-04-01 15:37:28",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "df5207cd-9417-4980-95d5-204bd35dc7c4",
        "InterviewEndDate": "2023-04-01 15:41:00",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "074c486b-391e-4d91-b9f0-b9be22086147",
        "InterviewEndDate": "2023-04-01 15:32:04",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "96e54e94-2699-4d8b-bb9c-e4fb34ef8022",
        "InterviewEndDate": "2023-04-01 16:08:00",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fa571d5e-4302-4145-8026-21958e4dfec2",
        "InterviewEndDate": "2023-04-01 16:09:01",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "010393fa-d0ec-4839-a2da-3ece50b4d6d8",
        "InterviewEndDate": "2023-04-01 15:58:56",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "56bf4e53-7ccb-481e-b69a-fe22d5a4fe44",
        "InterviewEndDate": "2023-04-01 16:07:17",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "44b2a9a9-192b-4ed2-8a29-f180034dd4ad",
        "InterviewEndDate": "2023-04-01 16:07:04",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c91b746d-49cc-4e46-bf39-568cbd6f99f4",
        "InterviewEndDate": "2023-04-01 16:15:16",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bd31b7c1-3e25-4ab1-aed0-ebda57f124d8",
        "InterviewEndDate": "2023-04-01 16:23:45",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1d12e781-c3d7-4b7d-9370-a6841a981a68",
        "InterviewEndDate": "2023-04-01 16:25:49",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f63f8ee1-567e-46c2-a9b3-91cfc1a8c9e1",
        "InterviewEndDate": "2023-04-01 16:24:36",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2bfd1b65-f6a1-453e-8849-78c65c2fd2e2",
        "InterviewEndDate": "2023-04-01 16:22:31",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e0154b9c-eca4-4ac1-a0a6-656d4a12a4e8",
        "InterviewEndDate": "2023-04-01 17:32:43",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "150ef25b-0529-48f8-96a1-1217600490ed",
        "InterviewEndDate": "2023-04-01 17:15:01",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "88900ebc-da50-438e-af5b-dbd03675b5d3",
        "InterviewEndDate": "2023-04-01 17:28:15",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2f0003b4-7c57-46ab-8aea-926ea4559f90",
        "InterviewEndDate": "2023-04-01 17:18:46",
        "InterviewState": "Completed",
        "Flight": "SK 2680",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 11
    },
    {
        "InterviewId": "23aefebe-13b6-459b-839a-48ebced8e87c",
        "InterviewEndDate": "2023-04-01 17:26:52",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "367fb756-c4c4-4165-8985-fba64db9f2d6",
        "InterviewEndDate": "2023-04-01 17:34:53",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3aad95d7-693d-44ac-aaf4-dce78f0e05a7",
        "InterviewEndDate": "2023-04-01 17:34:21",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "91fa17ee-c65b-4467-ba7f-9a9aeffa28c0",
        "InterviewEndDate": "2023-04-01 18:47:10",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2620db2a-0310-4a28-a951-fdc8f4717bf6",
        "InterviewEndDate": "2023-04-01 19:06:23",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3bbf092a-59f3-4fb0-9c42-018615fe6e4e",
        "InterviewEndDate": "2023-04-01 18:55:18",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1df3873d-4972-4a8e-98d9-16c5c311a3d4",
        "InterviewEndDate": "2023-04-01 18:58:12",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8d0b6075-22b9-489e-84b5-f0bfc8d95acf",
        "InterviewEndDate": "2023-04-01 19:08:48",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "708e35fa-b78d-44aa-8262-762fad2eeb29",
        "InterviewEndDate": "2023-04-01 19:03:19",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "71b99405-ae13-4315-81b6-c17c845d493f",
        "InterviewEndDate": "2023-04-01 19:25:23",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "10f1e5d3-4533-471b-bec8-bd9c7d619607",
        "InterviewEndDate": "2023-04-01 19:24:25",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "97b0dc7e-90e4-4dac-badd-d06254819360",
        "InterviewEndDate": "2023-04-01 19:20:25",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "242016ae-ebf7-423c-a8f2-700f72377630",
        "InterviewEndDate": "2023-04-01 19:33:39",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7b20112b-df16-4d1d-91ed-33c7637dd0bd",
        "InterviewEndDate": "2023-04-01 19:24:23",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2e60ee2c-8181-4401-81e6-be09e360b526",
        "InterviewEndDate": "2023-04-01 19:46:42",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "29f9425b-5486-4186-a7a4-97bd59e553dd",
        "InterviewEndDate": "2023-04-01 19:46:44",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3362078d-723b-4062-a291-e725683e9560",
        "InterviewEndDate": "2023-04-01 19:46:37",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6e1313eb-8f0b-41e7-9652-fa239d12203b",
        "InterviewEndDate": "2023-04-01 19:49:39",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cb2202c2-3295-4e1c-bd24-9149df26d877",
        "InterviewEndDate": "2023-04-01 19:49:21",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "09095421-55e1-453a-a093-2d433bbae4a2",
        "InterviewEndDate": "2023-04-01 21:18:53",
        "InterviewState": "Completed",
        "Flight": "BA  987",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fcacbf63-3666-4572-baa5-508721aa0ffe",
        "InterviewEndDate": "2023-04-01 21:01:57",
        "InterviewState": "Completed",
        "Flight": "BA  987",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8f6b2e59-bd7f-49c7-b210-af964034b420",
        "InterviewEndDate": "2023-04-01 21:29:42",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5ecf3b8e-d846-4739-bf50-16c61db38402",
        "InterviewEndDate": "2023-04-01 21:11:08",
        "InterviewState": "Completed",
        "Flight": "BA  987",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d0dd7fc7-0bdd-478b-9037-95ba610fce8b",
        "InterviewEndDate": "2023-04-01 21:24:59",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 11
    },
    {
        "InterviewId": "27b0824b-bad8-4978-9b58-60114908bddd",
        "InterviewEndDate": "2023-04-04 08:01:47",
        "InterviewState": "Completed",
        "Flight": "EW  013",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "847341b9-c28c-4f90-833b-10b24c07d767",
        "InterviewEndDate": "2023-04-04 08:01:34",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "90974854-7390-47cb-a5f1-c37b5cd90821",
        "InterviewEndDate": "2023-04-04 08:30:29",
        "InterviewState": "Completed",
        "Flight": "EW  013",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "99779b9d-8230-49b4-abec-c147b6662546",
        "InterviewEndDate": "2023-04-04 08:12:37",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b2fbf1e1-9507-43b1-b254-b61fc1cc7605",
        "InterviewEndDate": "2023-04-04 08:21:41",
        "InterviewState": "Completed",
        "Flight": "EW  013",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "94598149-2e72-4386-9802-599a328b689e",
        "InterviewEndDate": "2023-04-04 08:22:01",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3bc8cc4f-8cfb-411d-a610-1545d19c5d54",
        "InterviewEndDate": "2023-04-04 08:23:06",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5704e6b8-f18a-4854-8735-9e60107bf816",
        "InterviewEndDate": "2023-04-04 08:34:26",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6b17576c-cfa6-4983-a46c-faa33dfb61bd",
        "InterviewEndDate": "2023-04-04 08:39:13",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "918bda0a-a811-42b0-9e55-a546f22f0999",
        "InterviewEndDate": "2023-04-04 08:38:54",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cd30ca52-0893-4c83-8e65-41e72a1fe7a9",
        "InterviewEndDate": "2023-04-04 08:44:29",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "90df1dfd-131f-409c-a5fb-b8d29b450cc1",
        "InterviewEndDate": "2023-04-04 08:57:58",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d9c714ed-d867-46f3-a4df-f2dbd9090cfb",
        "InterviewEndDate": "2023-04-04 09:23:37",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "672549ce-88ec-448c-b0c5-661ccaef1eca",
        "InterviewEndDate": "2023-04-04 09:26:53",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ee826190-7780-4aca-a5f1-b3a1da1a592d",
        "InterviewEndDate": "2023-04-04 09:17:53",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "599f98c7-7003-4c6b-b78c-adfb741a5df2",
        "InterviewEndDate": "2023-04-04 09:32:10",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "70726327-93a3-4de5-b016-5fe66f0bdf9e",
        "InterviewEndDate": "2023-04-04 10:20:23",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1d436590-7c3b-4789-9885-a49c7a8edad7",
        "InterviewEndDate": "2023-04-04 10:14:48",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "eafb0999-992d-4b10-b7b4-c32505f8a31e",
        "InterviewEndDate": "2023-04-04 10:18:07",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "10e9eede-6afd-4b59-96bb-f95392b3356a",
        "InterviewEndDate": "2023-04-04 10:23:35",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "95e3e125-342f-4b66-994b-cd273f653596",
        "InterviewEndDate": "2023-04-04 10:24:19",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "df6f78f2-b306-4610-a9a8-ef6a984be99e",
        "InterviewEndDate": "2023-04-04 10:31:23",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7a6ad852-a4b6-440c-87af-b4f6ac32f482",
        "InterviewEndDate": "2023-04-04 10:30:13",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f7ea86bc-76de-4521-909e-871905f183fe",
        "InterviewEndDate": "2023-04-04 10:56:23",
        "InterviewState": "Completed",
        "Flight": "EW 8370",
        "Dest": "Lanzarote (ACE)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0dd1e408-3831-4699-a338-5b35ed348e3e",
        "InterviewEndDate": "2023-04-04 10:58:01",
        "InterviewState": "Completed",
        "Flight": "EW 8370",
        "Dest": "Lanzarote (ACE)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ba0feafa-f5d0-4e02-ac94-b37c9d2ab15e",
        "InterviewEndDate": "2023-04-04 10:58:37",
        "InterviewState": "Completed",
        "Flight": "EW 8370",
        "Dest": "Lanzarote (ACE)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ea94407d-f148-47c5-825e-2c782eef2fce",
        "InterviewEndDate": "2023-04-04 12:05:57",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8706d0b3-2718-4378-bc10-2484f9f386b4",
        "InterviewEndDate": "2023-04-04 11:59:40",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "99210640-00af-4d64-b83d-04b2cdeccd6e",
        "InterviewEndDate": "2023-04-04 11:55:25",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "58166a96-e1ec-4e16-b8f2-2149eb047c5c",
        "InterviewEndDate": "2023-04-04 12:50:33",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "19384524-021d-4fd6-863f-fca0a19fd28a",
        "InterviewEndDate": "2023-04-04 12:52:11",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "89a87b95-49bd-49c8-b521-6a2f901ad2d5",
        "InterviewEndDate": "2023-04-04 12:59:18",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "846d3e1b-5979-4d3e-b99e-5d2e929f77ca",
        "InterviewEndDate": "2023-04-04 12:39:41",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d464ee1c-ed3e-477c-add9-3ef0c2c56d93",
        "InterviewEndDate": "2023-04-04 12:59:59",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "39742b8c-3790-4d1c-98c0-3bb915cc2c33",
        "InterviewEndDate": "2023-04-04 13:07:12",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b9c52431-f962-4895-9225-7bd87d7fe8ad",
        "InterviewEndDate": "2023-04-04 13:04:24",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8c57bf94-a790-4b82-b427-5740edd8e747",
        "InterviewEndDate": "2023-04-04 13:08:26",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8c88f6eb-57cf-4b1f-ba5d-4aee401a10bc",
        "InterviewEndDate": "2023-04-04 13:11:07",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "05ce8947-8ec4-4253-8c3d-e16785942c2a",
        "InterviewEndDate": "2023-04-04 13:14:54",
        "InterviewState": "Completed",
        "Flight": "SK 1674",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c6d6977a-15df-49a9-8332-5929a5961525",
        "InterviewEndDate": "2023-04-04 13:40:24",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4e921fd3-d996-4727-9a77-3de7c3e5f124",
        "InterviewEndDate": "2023-04-04 13:30:21",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "80b26030-455d-4670-b378-566aed41c3ee",
        "InterviewEndDate": "2023-04-04 13:27:45",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8d4e7512-45fb-4571-a473-b15e8e692c29",
        "InterviewEndDate": "2023-04-04 13:24:32",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e7b64ca8-fd01-42f7-9f93-26dfcaf19e6d",
        "InterviewEndDate": "2023-04-04 13:29:52",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1bf9aa10-a2ed-4970-acd8-9529aac73621",
        "InterviewEndDate": "2023-04-04 14:09:15",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e09322ec-8194-43b2-b72c-95a8b5c19d45",
        "InterviewEndDate": "2023-04-04 14:03:24",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1b9ce9b3-0e30-4fdf-b2e7-88f0ff681acf",
        "InterviewEndDate": "2023-04-04 14:07:48",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "67d67982-5765-4bf5-9818-789c4406455b",
        "InterviewEndDate": "2023-04-04 14:11:44",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4bbcce9a-bc22-4e5d-867d-33072133094f",
        "InterviewEndDate": "2023-04-04 13:59:56",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "20568b70-2010-4f5b-a215-02d33781f973",
        "InterviewEndDate": "2023-04-05 07:48:54",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "46c8d6e5-2207-45e7-8f47-5e5f4db080e3",
        "InterviewEndDate": "2023-04-05 07:53:17",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 10
    },
    {
        "InterviewId": "03852335-fd76-4963-9c9a-34ecae5b7575",
        "InterviewEndDate": "2023-04-05 07:53:44",
        "InterviewState": "Completed",
        "Flight": "EW 4601",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b370e9e8-d165-4217-a089-6a2b93be58ea",
        "InterviewEndDate": "2023-04-05 07:53:08",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ca460a7e-8e08-4036-8bd3-bd14e5127c1d",
        "InterviewEndDate": "2023-04-05 07:49:19",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b48334b4-4e7b-4421-8603-2db7fc6487d8",
        "InterviewEndDate": "2023-04-05 08:57:26",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f5d2e2f0-d3d2-404e-8c68-22291fce7744",
        "InterviewEndDate": "2023-04-05 07:59:00",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0394b13f-63f8-4244-aa7c-f44a70c0ed55",
        "InterviewEndDate": "2023-04-05 08:00:25",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a1924198-7b57-40c8-8870-8520d69637c4",
        "InterviewEndDate": "2023-04-05 08:17:28",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c662f927-22b7-47b5-b7fd-ea0a6b90f5ec",
        "InterviewEndDate": "2023-04-05 08:14:25",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae92b150-a2c0-4640-9d96-be0a0f0008f0",
        "InterviewEndDate": "2023-04-05 09:05:04",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "07817b23-71cb-4522-9d74-2a288fbbe3d6",
        "InterviewEndDate": "2023-04-05 08:18:34",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7991081b-0344-43f4-9010-9e3b24744d77",
        "InterviewEndDate": "2023-04-05 08:13:28",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "43dc606a-a2de-494a-b568-e8155381554e",
        "InterviewEndDate": "2023-04-05 09:39:55",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dba6c39f-1131-4895-a8aa-52a438d13806",
        "InterviewEndDate": "2023-04-05 08:55:22",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a7278364-3b09-4d68-833b-54c44ab76abd",
        "InterviewEndDate": "2023-04-05 09:09:30",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "692c33eb-a620-4935-8f80-0ec6af4c1149",
        "InterviewEndDate": "2023-04-05 09:34:13",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6fa49f5c-f8eb-40f9-a90d-9c880d92b29b",
        "InterviewEndDate": "2023-04-05 09:12:42",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8821fd23-415b-4d04-b250-6b07736e0d81",
        "InterviewEndDate": "2023-04-05 09:13:00",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9dd6d35f-a76e-4bc1-9765-0c78e86de17f",
        "InterviewEndDate": "2023-04-05 09:39:35",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e88fc3e1-f6f5-4efa-a304-18701cfba5f8",
        "InterviewEndDate": "2023-04-05 09:31:10",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae7d0bac-3c74-4b30-a532-d82931d20ff8",
        "InterviewEndDate": "2023-04-05 09:34:24",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "64aef928-e78a-407c-833d-3088ac5e52bc",
        "InterviewEndDate": "2023-04-05 09:29:22",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "042e9341-b2b4-45aa-8e61-2f627d5b2aa4",
        "InterviewEndDate": "2023-04-05 09:38:56",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d5ca2fa3-d231-47b1-9288-0ba770fbac1d",
        "InterviewEndDate": "2023-04-05 09:43:08",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6925d17e-18b6-49b5-9ad4-9cb80ca917c6",
        "InterviewEndDate": "2023-04-05 10:33:25",
        "InterviewState": "Completed",
        "Flight": "I2 3673",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5df81810-0927-45d9-8ad6-83d4362e9d45",
        "InterviewEndDate": "2023-04-05 11:45:48",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d298b2f6-99c2-4144-8207-a3c96f5e0ead",
        "InterviewEndDate": "2023-04-05 10:34:01",
        "InterviewState": "Completed",
        "Flight": "EJU4898",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b1606337-aea1-450b-9ea6-f10d0d4adb25",
        "InterviewEndDate": "2023-04-05 10:34:02",
        "InterviewState": "Completed",
        "Flight": "EJU4898",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4121d19b-7565-401b-82b6-590a7dfb82e8",
        "InterviewEndDate": "2023-04-05 10:29:47",
        "InterviewState": "Completed",
        "Flight": "EJU4898",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "71ca9f63-5c70-48be-8eb7-0eb5d38a9563",
        "InterviewEndDate": "2023-04-05 10:49:22",
        "InterviewState": "Completed",
        "Flight": "EJU4898",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d9640cb2-6439-4ac1-afbf-c292ff15f13f",
        "InterviewEndDate": "2023-04-05 11:47:31",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "339c7c47-cab3-4c84-a671-4c52d3b57399",
        "InterviewEndDate": "2023-04-05 11:48:03",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1beb7466-3db0-4be0-a0ec-cecdfff96e59",
        "InterviewEndDate": "2023-04-05 11:51:44",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ced989fe-d840-483a-a54d-95a7b553d9c2",
        "InterviewEndDate": "2023-04-05 11:53:33",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b0548952-0057-4c22-bf66-b4835612c055",
        "InterviewEndDate": "2023-04-05 11:54:45",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a7e8f138-e0b7-4b78-a8bf-e507c7d3e177",
        "InterviewEndDate": "2023-04-05 12:23:21",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ebb7fedb-f409-4b6d-8e18-296e23ceff88",
        "InterviewEndDate": "2023-04-05 12:20:07",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "30ef9a4c-8057-45af-a3e4-e17b1a6a4d69",
        "InterviewEndDate": "2023-04-05 12:22:09",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "98f803e4-c3f7-4c35-a42e-d54430e5cb2d",
        "InterviewEndDate": "2023-04-05 12:23:38",
        "InterviewState": "Completed",
        "Flight": "BT  212",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Air Baltic",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9f651233-b3a5-4db0-a7e0-a5b6dad6bc8b",
        "InterviewEndDate": "2023-04-05 12:25:52",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "38ff4ffa-7e21-42d2-bc04-c7ea4e492827",
        "InterviewEndDate": "2023-04-05 13:32:35",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e9d04781-0e1d-49bc-88d5-ec9a26fb6320",
        "InterviewEndDate": "2023-04-05 13:06:32",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c403b4e4-4002-4c52-ba54-ab0cfad337fe",
        "InterviewEndDate": "2023-04-05 13:11:26",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "969d0448-5d59-42f2-aa88-a0d4806e2a5c",
        "InterviewEndDate": "2023-04-05 13:02:20",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e451091f-82a0-4c0b-adf5-c6663b73c949",
        "InterviewEndDate": "2023-04-05 14:00:18",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7475b74d-22ff-4ed5-ac08-f7916de994d9",
        "InterviewEndDate": "2023-04-05 13:52:41",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0fb33998-4886-41d6-a1d5-d63b603a83c4",
        "InterviewEndDate": "2023-04-05 13:53:52",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "766521bf-e8cd-4c59-a8f2-4b33987e5b5a",
        "InterviewEndDate": "2023-04-05 13:55:40",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "66c24b48-8ede-46df-956b-f1fd2006eb20",
        "InterviewEndDate": "2023-04-05 14:02:00",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e7412ab6-cf21-44ed-8b91-5bd53cb32d67",
        "InterviewEndDate": "2023-04-07 16:16:26",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "16e12f08-75d2-491d-a852-cec041d141c0",
        "InterviewEndDate": "2023-04-05 16:11:16",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "53d97716-f4bf-4f4d-b726-b01316513f1d",
        "InterviewEndDate": "2023-04-05 16:07:11",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8dc6f8a6-1a60-4ce9-9555-0635842ffcfa",
        "InterviewEndDate": "2023-04-05 16:17:25",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "84fa52eb-8b26-4517-9d88-93e563b0aeb1",
        "InterviewEndDate": "2023-04-05 16:17:28",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0995ab59-7ac7-4908-aeb8-7b76f680e38e",
        "InterviewEndDate": "2023-04-05 16:18:38",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "54fb9d81-cec3-470d-90ca-d236cd4abab9",
        "InterviewEndDate": "2023-04-05 16:16:38",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b1e0472f-f0a0-4ffb-8d7f-b3f7b6a0f066",
        "InterviewEndDate": "2023-04-05 16:25:23",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e03c5f80-6ded-4802-9b87-cf6306bfe55c",
        "InterviewEndDate": "2023-04-05 16:38:39",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5e3e1a01-ad3a-436e-971c-99eccd18bde5",
        "InterviewEndDate": "2023-04-05 16:29:03",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "47209eba-3c89-435e-a5de-a31c9bff9ab0",
        "InterviewEndDate": "2023-04-05 16:27:28",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a953b52d-2245-43b3-a859-43f255658edd",
        "InterviewEndDate": "2023-04-05 16:33:37",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "81443b1d-dc1c-45b8-b046-63039b5bb20f",
        "InterviewEndDate": "2023-04-05 16:36:59",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ca843e4e-f6bb-4797-a8c3-3d2a90616d31",
        "InterviewEndDate": "2023-04-05 16:37:31",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c2c00025-c017-47b5-9fff-3cb1edfd61b5",
        "InterviewEndDate": "2023-04-05 16:40:18",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fa62529d-85a8-475d-9869-b32d87368d9b",
        "InterviewEndDate": "2023-04-05 16:46:15",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "79ca734e-3949-4e71-a0e2-09dc5361585f",
        "InterviewEndDate": "2023-04-05 17:11:28",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "93cd4f0b-b46c-4646-b3f0-0318a9473e6f",
        "InterviewEndDate": "2023-04-05 17:12:07",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bc55be72-cf0a-4013-8b99-076d35283672",
        "InterviewEndDate": "2023-04-05 17:10:43",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ab77f850-fdb9-4771-ac46-b372af81e383",
        "InterviewEndDate": "2023-04-05 17:12:30",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "256a8a3a-0a7f-4164-9b4c-e74aab7fc8ef",
        "InterviewEndDate": "2023-04-05 17:09:46",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "542830ee-2069-497b-9e97-e0685379d996",
        "InterviewEndDate": "2023-04-05 18:00:13",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6995ee8c-2225-4f94-b2f0-ec4fd4641554",
        "InterviewEndDate": "2023-04-05 17:56:29",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "563f3bcf-3fd4-48fe-855a-01d6309cb57a",
        "InterviewEndDate": "2023-04-05 17:59:24",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "65036f5e-e56b-4ae8-a435-f3ae0452667d",
        "InterviewEndDate": "2023-04-05 18:06:32",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3eb24815-68c2-4d84-8069-69ef9a735f63",
        "InterviewEndDate": "2023-04-05 17:58:01",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4ed681f9-0b03-4c78-b691-96c056a47f58",
        "InterviewEndDate": "2023-04-05 18:08:11",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9cc4c177-fdf3-4cb8-97c0-940b9bf62e63",
        "InterviewEndDate": "2023-04-05 18:08:39",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b53b8496-5ae2-4417-9818-e83495f2519c",
        "InterviewEndDate": "2023-04-05 18:09:59",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e24d00b8-2eb7-4b51-9d8d-3ee3b754a8f7",
        "InterviewEndDate": "2023-04-05 18:14:44",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "840752d7-01dc-427e-895a-e5c8cedd335a",
        "InterviewEndDate": "2023-04-05 19:04:15",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4a32f6f9-a4eb-445a-95b9-26257e43574a",
        "InterviewEndDate": "2023-04-05 18:48:14",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8fbef057-2aef-466d-af87-305009ce6b28",
        "InterviewEndDate": "2023-04-05 18:52:28",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0a3213b4-934b-4a4a-b20a-7be1c6221089",
        "InterviewEndDate": "2023-04-05 18:49:41",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c7faa241-836b-45fe-a78b-d9ed1446dc10",
        "InterviewEndDate": "2023-04-05 18:52:54",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3c68bb4b-e6f9-4d2e-a73e-1be9086aeb2a",
        "InterviewEndDate": "2023-04-05 19:01:23",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "41dbaeba-f000-4b7f-8a09-f2a9dee85349",
        "InterviewEndDate": "2023-04-05 19:07:56",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9529520a-34d3-4759-80d2-58d92daeb23f",
        "InterviewEndDate": "2023-04-05 19:03:02",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9c613009-a25d-4802-9198-f89b6fcd1171",
        "InterviewEndDate": "2023-04-05 19:07:22",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "00a48a51-0169-4072-a0dc-44388e204a9c",
        "InterviewEndDate": "2023-04-07 19:33:00",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3c728aa4-f5d8-4634-928a-f11a25bee0b7",
        "InterviewEndDate": "2023-04-07 15:22:59",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "19b437fc-8221-4743-b114-f86cb6fd1e66",
        "InterviewEndDate": "2023-04-07 15:36:07",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "66a4272d-9366-4204-96df-73c0530995dc",
        "InterviewEndDate": "2023-04-07 16:14:39",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "29b152d5-cb83-4570-ba54-7d86d75fb0ff",
        "InterviewEndDate": "2023-04-07 15:40:13",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "7553300d-09df-44be-b4f4-57125da7b679",
        "InterviewEndDate": "2023-04-07 16:05:41",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2ee91aab-e418-4d23-a057-956550c7173e",
        "InterviewEndDate": "2023-04-07 16:16:31",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "1c39dfa0-6450-4fb7-8ffb-b7d75ba53d68",
        "InterviewEndDate": "2023-04-07 16:02:20",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "3b7c2063-dc03-4754-b2e9-e232cde331c2",
        "InterviewEndDate": "2023-04-07 16:16:25",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5872aeff-6e3e-4966-8d45-3d77eea6e7f6",
        "InterviewEndDate": "2023-04-07 16:21:12",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "60818e21-246c-4261-8fdd-59bf01ab20f1",
        "InterviewEndDate": "2023-04-07 16:20:53",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "73afc1b3-031b-44fd-a988-3bc63be4b963",
        "InterviewEndDate": "2023-04-07 16:23:37",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "9c456e96-5868-47b9-a98e-c1b392e1f014",
        "InterviewEndDate": "2023-04-07 17:10:15",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8a2c45d0-6928-4346-a969-595f4a9f1619",
        "InterviewEndDate": "2023-04-07 17:08:56",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 998
    },
    {
        "InterviewId": "c99c4caf-ecea-449a-aaac-b310f75b9bc5",
        "InterviewEndDate": "2023-04-07 16:58:09",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 998
    },
    {
        "InterviewId": "4c77a533-5eb4-4923-a4bf-fbcb797d15a8",
        "InterviewEndDate": "2023-04-07 18:11:19",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "5dd7967a-eb7d-4956-be8c-a56d0636fb44",
        "InterviewEndDate": "2023-04-07 17:41:29",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "269a41bb-fa8d-46e2-b2a7-d573bfea4333",
        "InterviewEndDate": "2023-04-07 17:44:38",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "3683220c-83ee-438a-aa51-b0c2f0fa5945",
        "InterviewEndDate": "2023-04-07 18:44:38",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "cc902dbd-68ee-49cc-a411-5495f77cf89b",
        "InterviewEndDate": "2023-04-07 18:16:58",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "01c0dfd3-6444-4c02-865a-5e933961c31d",
        "InterviewEndDate": "2023-04-07 18:41:36",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8c0b0ecc-62c9-4cb8-b2d8-ab99d8f05af9",
        "InterviewEndDate": "2023-04-07 18:37:42",
        "InterviewState": "Completed",
        "Flight": "TO 3407",
        "Dest": "Paris (ORY)",
        "AirlineCode": "Transavia France",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f55c88c3-6528-436c-9b17-5b9796e16568",
        "InterviewEndDate": "2023-04-07 18:43:19",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "5946d162-c5bb-4a69-866b-c8b51484b28a",
        "InterviewEndDate": "2023-04-07 18:46:52",
        "InterviewState": "Completed",
        "Flight": "LO  390",
        "Dest": "Warschau (WAW)",
        "AirlineCode": "LOT Polish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "85651b41-87ae-4ab0-a537-281aa0170f9f",
        "InterviewEndDate": "2023-04-07 18:45:47",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 998
    },
    {
        "InterviewId": "be635c8b-65b3-4f71-8059-1485efb36894",
        "InterviewEndDate": "2023-04-07 18:51:51",
        "InterviewState": "Completed",
        "Flight": "LO  390",
        "Dest": "Warschau (WAW)",
        "AirlineCode": "LOT Polish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9d34e464-2b65-49ef-af32-68f9b4dea1da",
        "InterviewEndDate": "2023-04-07 18:57:18",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d8321b62-d074-451d-ac2e-e2895ec5c670",
        "InterviewEndDate": "2023-04-07 18:58:41",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "d3857fb6-fba0-4f11-a3f6-03ef056039b0",
        "InterviewEndDate": "2023-04-07 19:05:13",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ef6ecc2a-824a-4c2e-872e-b9179085bda6",
        "InterviewEndDate": "2023-04-07 19:10:56",
        "InterviewState": "Completed",
        "Flight": "EW 8048",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2cb3e78d-459b-4607-a03b-340861420001",
        "InterviewEndDate": "2023-04-07 19:00:02",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "c260a0ff-3519-454d-9386-4b4582d259c8",
        "InterviewEndDate": "2023-04-07 19:39:56",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "18f0bc6f-0fd2-4872-94a7-019fd084a8a4",
        "InterviewEndDate": "2023-04-07 19:35:59",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "4389d0f2-90a2-4c04-a206-218d7e5bdab9",
        "InterviewEndDate": "2023-04-07 19:40:38",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "6d00f7ba-3b92-4ba4-8fa9-b0a3abef906d",
        "InterviewEndDate": "2023-04-07 19:31:36",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "557357ec-041c-4e11-8f2e-2c642b435fb4",
        "InterviewEndDate": "2023-04-07 19:40:35",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "f075099b-4e68-4e04-a48c-890fefb38069",
        "InterviewEndDate": "2023-04-07 19:36:54",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "13f2430c-6aee-44a6-b7b9-15f34b007cec",
        "InterviewEndDate": "2023-04-07 19:30:47",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "23967a43-7a2c-40db-a450-bc09697d2383",
        "InterviewEndDate": "2023-04-07 19:39:08",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4f541e1f-bfe1-4bb7-a988-dc6f2baef541",
        "InterviewEndDate": "2023-04-07 19:43:47",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "db1caca3-b2f2-423e-9429-d38d60056f16",
        "InterviewEndDate": "2023-04-07 19:45:50",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "143cd458-edd3-46de-b2a3-f4d4bb113de2",
        "InterviewEndDate": "2023-04-10 07:33:20",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "babcd41e-b578-4441-ae95-8e2e434510a2",
        "InterviewEndDate": "2023-04-07 19:50:21",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "db7c1bf4-813a-45e8-bd2d-6657b737e216",
        "InterviewEndDate": "2023-04-11 08:23:35",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c13498d0-c5e0-4f20-ac15-5504de5fd68e",
        "InterviewEndDate": "2023-04-10 07:30:54",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fb9afdfe-bb83-4696-bc5f-79a4e4413c75",
        "InterviewEndDate": "2023-04-11 16:59:13",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4d8e2045-736a-407f-a5c0-2e9ccea44bbb",
        "InterviewEndDate": "2023-04-10 07:37:06",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "23689b5e-dd7e-4c50-b432-dfc2cb08dfb5",
        "InterviewEndDate": "2023-04-11 16:58:55",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d23a9dc7-eae8-465e-b8d8-d066f374bae2",
        "InterviewEndDate": "2023-04-14 15:58:48",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "197c9793-2cbf-428d-bab5-5e4b21779b48",
        "InterviewEndDate": "2023-04-10 07:32:50",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "25ba548f-2818-4f53-b1fe-96984bdc8e1a",
        "InterviewEndDate": "2023-04-10 07:33:30",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2e49ee4f-6d28-4464-8e46-330d7350e506",
        "InterviewEndDate": "2023-04-10 07:35:41",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8daa065d-3c3a-4371-b725-f113ae21874f",
        "InterviewEndDate": "2023-04-10 08:19:40",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "00d36f7d-e65b-44e2-9fb9-fae1cd38c71e",
        "InterviewEndDate": "2023-04-10 07:45:03",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4eeec6e6-f8fc-4cb4-84ef-7528b85c9a74",
        "InterviewEndDate": "2023-04-10 08:22:29",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c6b297d6-52de-47eb-b1a7-438f64bc0968",
        "InterviewEndDate": "2023-04-10 08:25:04",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9def63fe-8657-454a-a4b1-a84da578d523",
        "InterviewEndDate": "2023-04-10 08:21:55",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5a830617-56e6-4273-989a-98dbf9b66390",
        "InterviewEndDate": "2023-04-10 08:21:20",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "53e8783e-042b-40bc-9247-52b6519a5cc9",
        "InterviewEndDate": "2023-04-10 08:16:22",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b98ff21a-41bd-4cf9-9bd3-36f075fa28ce",
        "InterviewEndDate": "2023-04-10 08:24:17",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3adca64b-159f-4ce5-b85a-e8f95434e2cc",
        "InterviewEndDate": "2023-04-10 08:39:42",
        "InterviewState": "Completed",
        "Flight": "EW 4601",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "433ca4c4-dc21-4a81-b2f4-39183807f28d",
        "InterviewEndDate": "2023-04-10 09:25:10",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e299bd4d-852b-4eb9-9e42-ef128cf058fa",
        "InterviewEndDate": "2023-04-10 09:28:53",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5425127d-7029-4238-bf9d-2334028eff60",
        "InterviewEndDate": "2023-04-10 08:40:03",
        "InterviewState": "Completed",
        "Flight": "EW 4601",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f2b2eb2c-6c11-4de8-8cd4-fcf010edfa94",
        "InterviewEndDate": "2023-04-10 08:35:52",
        "InterviewState": "Completed",
        "Flight": "EW 4601",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6876da1a-0d85-4df2-b71f-cbd8a9af6c86",
        "InterviewEndDate": "2023-04-10 08:38:42",
        "InterviewState": "Completed",
        "Flight": "EW 4601",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9fd22267-a092-4d3b-a5a4-daa7196e45e2",
        "InterviewEndDate": "2023-04-10 09:31:34",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d2e08ac0-aa30-4645-8f27-278ebfd0830a",
        "InterviewEndDate": "2023-04-10 09:18:26",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c4cc21a2-5779-4719-8fe8-edd521993092",
        "InterviewEndDate": "2023-04-10 09:27:33",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "29f0f08c-ef52-4429-b778-f1fdf2c91f1f",
        "InterviewEndDate": "2023-04-10 10:20:53",
        "InterviewState": "Completed",
        "Flight": "EJU5103",
        "Dest": "Valencia (VLC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c267cbdd-f635-4bdc-8904-8c6dc0d6f496",
        "InterviewEndDate": "2023-04-10 12:33:21",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c7ed3077-042f-4fc7-ab52-aea26b61f203",
        "InterviewEndDate": "2023-04-10 13:14:03",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d0019cb2-4a66-4626-93d8-8f51a647304d",
        "InterviewEndDate": "2023-04-10 10:22:08",
        "InterviewState": "Completed",
        "Flight": "EJU5103",
        "Dest": "Valencia (VLC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8d42e074-caf5-4d41-88dd-df3e6f0cd5bb",
        "InterviewEndDate": "2023-04-10 10:15:49",
        "InterviewState": "Completed",
        "Flight": "EJU5103",
        "Dest": "Valencia (VLC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5367e2c7-4b2d-49e7-af51-012501a96e1e",
        "InterviewEndDate": "2023-04-10 10:21:37",
        "InterviewState": "Completed",
        "Flight": "EJU5103",
        "Dest": "Valencia (VLC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "74fc8531-df54-4962-b9d1-051df3c4ae8b",
        "InterviewEndDate": "2023-04-10 12:06:00",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "61b31978-4c54-491b-ba97-d96cfb73a043",
        "InterviewEndDate": "2023-04-10 12:06:09",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5df81a8d-aefa-49e7-80e1-70ac5fb9c3c3",
        "InterviewEndDate": "2023-04-10 12:10:55",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b26a3ed0-f8d2-4ff2-957a-67c73d3e8990",
        "InterviewEndDate": "2023-04-10 12:11:34",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ecdd08b0-e0aa-4754-b929-a12f3dbe9db7",
        "InterviewEndDate": "2023-04-10 13:15:26",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9f44c9cf-4440-49a7-9218-b871e725fc6e",
        "InterviewEndDate": "2023-04-10 13:20:33",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "83d6b02f-0d74-4c2c-8933-527cc551087c",
        "InterviewEndDate": "2023-04-10 13:15:09",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "92589492-8ab5-469c-956a-f93dc850c493",
        "InterviewEndDate": "2023-04-10 13:23:24",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d5365ad8-a9a1-4795-8f8f-e9f6a8a60aad",
        "InterviewEndDate": "2023-04-10 13:12:23",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "049e66b9-9634-412a-99a7-10dcaf62a1b6",
        "InterviewEndDate": "2023-04-10 14:05:45",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "746b3f93-befb-417b-b4e6-98c662154282",
        "InterviewEndDate": "2023-04-10 14:19:00",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7eebb77f-c9b9-4c55-b7df-5bd4aac7a750",
        "InterviewEndDate": "2023-04-11 07:56:10",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "75ff8a1c-ea22-451c-b761-3bf1cbb98702",
        "InterviewEndDate": "2023-04-10 14:00:19",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae4d2e4a-71d0-41a2-8470-61a08533d67a",
        "InterviewEndDate": "2023-04-11 17:01:31",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f99bbec0-2bf3-4df8-84c0-427666b08d3c",
        "InterviewEndDate": "2023-04-11 07:51:58",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "25e6a1fe-b657-4bc6-8836-c372932836b8",
        "InterviewEndDate": "2023-04-11 07:51:54",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1efa3d99-5d87-44f3-ad10-79eae1c5d2a3",
        "InterviewEndDate": "2023-04-11 07:55:31",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cbb35f04-c4d5-40b3-967f-d0a935661e09",
        "InterviewEndDate": "2023-04-11 07:55:38",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d04a6723-ffd4-4d66-920a-5ba02b924775",
        "InterviewEndDate": "2023-04-11 08:24:54",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3d013500-ffdf-4653-83de-bceaa19cf821",
        "InterviewEndDate": "2023-04-11 08:26:23",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3fcd40d0-1f33-4336-9407-5e4f10124f79",
        "InterviewEndDate": "2023-04-11 08:20:15",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9cd800ea-bdad-4595-b114-c1c3822321ce",
        "InterviewEndDate": "2023-04-11 08:21:50",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b0b82fde-8224-4c69-b931-3e11cebeb325",
        "InterviewEndDate": "2023-04-11 08:25:06",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c5384bdf-ccec-4597-9d0c-3499ae1e269c",
        "InterviewEndDate": "2023-04-11 09:19:50",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "afaff12d-87dd-4f6d-a11a-1e740209de76",
        "InterviewEndDate": "2023-04-11 09:16:59",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f01c7ff6-26ee-4a54-825d-444f157418fd",
        "InterviewEndDate": "2023-04-11 09:25:33",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "35d6f3ba-c4db-458c-bc8f-72e28311dbb7",
        "InterviewEndDate": "2023-04-11 09:15:00",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c51b4c14-de13-41e5-a03b-6ba851e936d9",
        "InterviewEndDate": "2023-04-11 09:04:13",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2f1cb519-bc8f-45a4-991c-545bc745100d",
        "InterviewEndDate": "2023-04-11 09:17:27",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b37a8b60-195e-445f-aa37-166594c70e5b",
        "InterviewEndDate": "2023-04-11 09:21:13",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "82e6a4f0-1c92-4d91-babd-e9479fcffe1a",
        "InterviewEndDate": "2023-04-11 09:26:49",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0052c1da-87a1-4a0c-a80e-51dab2b63b79",
        "InterviewEndDate": "2023-04-11 09:31:24",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "aaff6c8a-cde3-4646-bbbd-ed9418bf8dbc",
        "InterviewEndDate": "2023-04-11 09:33:32",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5dd41921-6a53-4336-ab1a-558b48b5d3c0",
        "InterviewEndDate": "2023-04-11 10:14:29",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b9fad539-dc0c-4369-a89e-078901428676",
        "InterviewEndDate": "2023-04-11 10:12:43",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f4b2ce63-3d88-4433-a977-47bba30daebf",
        "InterviewEndDate": "2023-04-11 10:10:36",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d0bf7458-8e14-4759-9c4e-39b49c3ebc4b",
        "InterviewEndDate": "2023-04-11 10:07:45",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b5b9eb76-1581-4927-9224-c53b25592265",
        "InterviewEndDate": "2023-04-11 10:06:13",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "52f262e1-16a9-4279-90e8-2dc0a32b0764",
        "InterviewEndDate": "2023-04-11 10:08:08",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6583f116-f0e8-4004-b733-ad50225f23bb",
        "InterviewEndDate": "2023-04-11 10:19:32",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6df0a03f-7904-4b46-ae0d-68bf64f2150c",
        "InterviewEndDate": "2023-04-11 10:19:58",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "310bceea-60e0-4d5d-83bc-6c78cd5460cc",
        "InterviewEndDate": "2023-04-11 10:21:15",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c84eff8d-3270-4399-97e6-a58ea807420c",
        "InterviewEndDate": "2023-04-11 10:32:12",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9659d726-23dd-4b7b-bf70-dd44c3b223fe",
        "InterviewEndDate": "2023-04-11 11:37:25",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5952386c-4d3d-4f63-bacf-bd5e68daddfd",
        "InterviewEndDate": "2023-04-11 10:28:43",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c6e39db9-c34f-4c67-a57c-eecba204e6c2",
        "InterviewEndDate": "2023-04-11 11:37:47",
        "InterviewState": "Completed",
        "Flight": "LH  183",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2921c2f1-303d-4b58-a4ce-e541e52d81f9",
        "InterviewEndDate": "2023-04-11 11:32:13",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cf9b97d0-6cf5-4a24-9120-2faac3d06f31",
        "InterviewEndDate": "2023-04-11 11:44:17",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b6ddfeff-9558-4534-9515-7ab57059a958",
        "InterviewEndDate": "2023-04-11 11:48:54",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a75e8a95-7bda-4fdb-bd9f-f8ceeb80f5be",
        "InterviewEndDate": "2023-04-11 11:52:48",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ec41ce92-d579-49d7-a086-f847444b50a5",
        "InterviewEndDate": "2023-04-11 12:36:35",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "53a036e3-63e3-4ed5-9bee-8ab180e69211",
        "InterviewEndDate": "2023-04-11 12:48:52",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "30aa9cab-4d76-4806-a847-0cf08d2d2a92",
        "InterviewEndDate": "2023-04-11 12:40:07",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "99ab6b9e-6006-472b-9b35-fba3eebb53ae",
        "InterviewEndDate": "2023-04-11 12:39:44",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6cb826eb-9872-4942-a2d8-1fe1e0d1ac77",
        "InterviewEndDate": "2023-04-11 12:53:00",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e1654cde-7c30-408e-b2c7-c5b59fffc8f9",
        "InterviewEndDate": "2023-04-11 12:45:26",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "99087239-f073-4167-ab9a-75af184bcbbe",
        "InterviewEndDate": "2023-04-11 13:49:36",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "946f559b-3908-4434-a7c0-de9baf9d70ad",
        "InterviewEndDate": "2023-04-11 12:52:57",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "16fd3cc0-f99a-4e88-8b2d-98559aaecd21",
        "InterviewEndDate": "2023-04-11 12:52:49",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7c822da3-be4f-4948-b413-8e7805ad3b5d",
        "InterviewEndDate": "2023-04-11 13:52:04",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "627d84c9-e480-4b9a-81d3-62fac5d03f88",
        "InterviewEndDate": "2023-04-11 13:39:11",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1c0ebb6c-0c14-41e7-949e-228df314fa1f",
        "InterviewEndDate": "2023-04-11 13:40:47",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fb95c683-ea44-4c21-abfb-a3fa906599ba",
        "InterviewEndDate": "2023-04-11 13:42:21",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f026c969-59c6-4f80-a7a2-87e16f7bbddd",
        "InterviewEndDate": "2023-04-11 13:44:22",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "592721db-fd80-4ea9-84f7-e5ab6cf208ef",
        "InterviewEndDate": "2023-04-11 14:02:10",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "32e46dff-6eba-4b51-bc51-10a74ff17d65",
        "InterviewEndDate": "2023-04-11 17:57:42",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "48d5530b-d3d3-465e-a603-edd0472cab5b",
        "InterviewEndDate": "2023-04-11 17:06:21",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c6f5d150-d3eb-4416-bf67-893863d5d8c4",
        "InterviewEndDate": "2023-04-11 18:00:02",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "5ce06b04-1844-42c5-b061-5536658f4635",
        "InterviewEndDate": "2023-04-11 17:56:44",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "27b4a13f-8391-4da8-8500-478369382405",
        "InterviewEndDate": "2023-04-11 17:00:18",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "905be60b-121d-4e42-bd88-c1c663921a39",
        "InterviewEndDate": "2023-04-11 17:43:17",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fe27470e-e1ff-4c6c-ba24-0f0b2875ebcc",
        "InterviewEndDate": "2023-04-11 17:39:32",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "64aaf23a-fd4e-4f67-994e-5c2febd43ab5",
        "InterviewEndDate": "2023-04-11 17:26:44",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "76ca3999-43a7-43bd-9f43-bbd0bdb7c72a",
        "InterviewEndDate": "2023-04-11 18:00:53",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "75199fca-0dcd-4d79-9728-973a3f76a61b",
        "InterviewEndDate": "2023-04-11 17:30:56",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0132e040-32d4-4c6d-a54a-827db2609667",
        "InterviewEndDate": "2023-04-11 18:12:51",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3930cf11-5897-439a-babc-d8824b5491e5",
        "InterviewEndDate": "2023-04-11 18:01:44",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ccddfce0-229f-48ec-ad94-55601b149e9a",
        "InterviewEndDate": "2023-04-11 18:01:28",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0c4eb743-27be-4483-a712-a1f4d24d72e3",
        "InterviewEndDate": "2023-04-11 18:08:37",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "9869c862-92dc-4a55-a9a2-1472db42891f",
        "InterviewEndDate": "2023-04-11 18:06:23",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "02af3b64-907e-4437-8652-212b95b4418b",
        "InterviewEndDate": "2023-04-11 18:10:14",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0dbcb87e-fcbf-44fd-907e-743b9273d84c",
        "InterviewEndDate": "2023-04-11 18:07:45",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "11868558-6eeb-4261-8b61-5f527ba2daa2",
        "InterviewEndDate": "2023-04-11 19:27:15",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "9e0c71cc-6b1c-4ad1-9cc9-98e92d8a1b4e",
        "InterviewEndDate": "2023-04-11 18:13:04",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "e6de2a4e-572a-4293-83f7-f020138c23ab",
        "InterviewEndDate": "2023-04-11 18:16:30",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "433a07b6-9547-46a0-b9a3-4dac2a46d077",
        "InterviewEndDate": "2023-04-11 19:23:18",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7b70423c-fe3c-4cad-b752-6386b288b93e",
        "InterviewEndDate": "2023-04-11 19:02:35",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "62e43414-2665-4471-b20f-9a969c8f4fec",
        "InterviewEndDate": "2023-04-11 18:14:33",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "43b4ef46-aaf6-4f4a-b9b2-2d03346afc4e",
        "InterviewEndDate": "2023-04-11 19:03:52",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "82928434-22d3-41ec-9d54-3637e633124b",
        "InterviewEndDate": "2023-04-11 18:36:57",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "69cb08bb-0b61-414f-8b70-996e3f3128f4",
        "InterviewEndDate": "2023-04-11 18:21:34",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "feb017bc-c01c-4968-8980-1f7b92469524",
        "InterviewEndDate": "2023-04-11 19:07:14",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "1c23f408-cc34-4a69-a03d-9c7cc2368389",
        "InterviewEndDate": "2023-04-11 19:02:22",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "3df9c5f9-d847-4f48-b77c-2df7b7ab0c68",
        "InterviewEndDate": "2023-04-11 18:29:26",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "d71eb227-0914-43bc-aedf-c37de4a576e2",
        "InterviewEndDate": "2023-04-11 18:35:07",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a0ac94bc-f2dc-4f90-b420-c5895a2102b6",
        "InterviewEndDate": "2023-04-11 19:04:01",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "0f908e55-8e8b-4d34-994e-5765c37a64ce",
        "InterviewEndDate": "2023-04-11 19:20:37",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "93072494-c9ad-4117-b3bd-8339e08ba3a4",
        "InterviewEndDate": "2023-04-11 19:09:49",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "1a7cb169-1527-4f9a-8cd0-2380b11fda8c",
        "InterviewEndDate": "2023-04-11 19:03:17",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5124fae0-a86b-4198-916c-b47534702c99",
        "InterviewEndDate": "2023-04-11 19:00:45",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ca4dab96-d75d-4c0f-b810-d5158d068a04",
        "InterviewEndDate": "2023-04-11 20:07:20",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "6ae42ad4-93ea-4fcb-9650-06710f598360",
        "InterviewEndDate": "2023-04-11 19:24:33",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "e7d8a637-56c5-49b0-8fc1-a3ee31195067",
        "InterviewEndDate": "2023-04-11 19:18:09",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "dec304d9-147b-4dd7-80f1-452b7303d255",
        "InterviewEndDate": "2023-04-11 19:11:26",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "801bc18d-43ba-42e2-a00a-5433a7cd17cf",
        "InterviewEndDate": "2023-04-11 19:26:36",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "31ade0a6-12f6-4900-bdfc-b4fb52080f18",
        "InterviewEndDate": "2023-04-11 19:23:04",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f1bf1c03-7b74-4e7e-a1f7-d50cc5d6774a",
        "InterviewEndDate": "2023-04-11 19:28:57",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "be842f2e-60d7-4188-b6ba-29bad00b134e",
        "InterviewEndDate": "2023-04-11 20:05:52",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "de7d2d5d-6828-4a08-838a-924a526a8c19",
        "InterviewEndDate": "2023-04-11 19:35:00",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5736376e-c338-48ed-9b6a-dab331b7e998",
        "InterviewEndDate": "2023-04-11 20:08:13",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "04c2083d-4937-4438-8200-2f9f0d2fe118",
        "InterviewEndDate": "2023-04-11 19:59:01",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2b20db5b-c89a-41b9-94bb-68eadf782626",
        "InterviewEndDate": "2023-04-11 20:01:00",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b901e9b9-da13-4cc0-8b64-50631498f06d",
        "InterviewEndDate": "2023-04-11 20:02:22",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "750f48b1-f5c0-4a89-9d22-d6a55bcf7f6e",
        "InterviewEndDate": "2023-04-11 20:00:35",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ac65816a-cde3-4a93-850a-462b6c463ae6",
        "InterviewEndDate": "2023-04-11 20:04:48",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "e95f1662-be98-4806-a244-28847b9eff47",
        "InterviewEndDate": "2023-04-11 20:05:11",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c6642b60-2458-4055-8400-a3bf819cea80",
        "InterviewEndDate": "2023-04-11 20:10:10",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "432b607c-93ab-4f6a-bda1-dae93dafb9ff",
        "InterviewEndDate": "2023-04-11 20:31:08",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0ca49a46-f762-4474-8d5c-416aabf29b2a",
        "InterviewEndDate": "2023-04-11 20:12:57",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "180ae0f8-6b91-46fe-b32e-1f072eee9474",
        "InterviewEndDate": "2023-04-11 20:17:23",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5b69feb2-963f-4664-b922-51c9c81870bb",
        "InterviewEndDate": "2023-04-11 21:40:40",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "95b0515e-e801-40cd-8ded-623aa9570dd0",
        "InterviewEndDate": "2023-04-11 20:16:44",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "9bfb5921-e1c7-4398-b4cd-9c5277784fbf",
        "InterviewEndDate": "2023-04-11 22:05:31",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "bdb75815-5ea9-4531-9f27-3b4d9d94c762",
        "InterviewEndDate": "2023-04-11 20:24:12",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "32b2be4c-5cea-4b3f-85b8-f85d77e23854",
        "InterviewEndDate": "2023-04-11 20:26:47",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "acb586b9-8e0c-420f-8231-f4ca6b75aa6d",
        "InterviewEndDate": "2023-04-11 20:23:05",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "be0687a5-c9e8-44f1-b692-b6e1da003de2",
        "InterviewEndDate": "2023-04-11 20:55:13",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9cc460ce-43fb-4697-9bc9-fc932a498623",
        "InterviewEndDate": "2023-04-11 20:34:46",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8c246a6f-e4a4-4f70-84ed-2b9d8f27ac12",
        "InterviewEndDate": "2023-04-11 20:49:59",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ad04f637-4058-4f77-b516-bb134a5976bb",
        "InterviewEndDate": "2023-04-11 21:39:46",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e4a55dd0-265a-4d82-88db-a3d33f530cf2",
        "InterviewEndDate": "2023-04-11 21:39:04",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "adfb3cc3-5b30-4bc6-81da-f9e1b3dd78a3",
        "InterviewEndDate": "2023-04-11 21:41:49",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "dcca2e5d-758b-4989-86b9-68a28c98f5ed",
        "InterviewEndDate": "2023-04-11 21:36:37",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "240267a3-8589-4bcf-a8bd-96f4a84ff971",
        "InterviewEndDate": "2023-04-11 21:41:11",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fa1de466-de8b-4ff5-8f4e-6fe0babe3c68",
        "InterviewEndDate": "2023-04-11 21:37:07",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "575e849c-3294-4e1e-b190-431367490b52",
        "InterviewEndDate": "2023-04-11 22:07:52",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6a1f527d-c1b7-40fc-9f9e-9225053a93ee",
        "InterviewEndDate": "2023-04-11 21:46:56",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "bbe9a3a6-6423-429c-b663-d5e935a0fab2",
        "InterviewEndDate": "2023-04-11 22:08:15",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a8e1a8f3-633b-499a-a74e-070c1fd0e93c",
        "InterviewEndDate": "2023-04-11 22:06:49",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b4b25003-2e4c-413d-a69e-89da4e488817",
        "InterviewEndDate": "2023-04-11 22:06:57",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a463fac1-52b0-41a1-b167-3829949f525e",
        "InterviewEndDate": "2023-04-11 22:10:04",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 998
    },
    {
        "InterviewId": "da0293e4-f398-4217-878c-9b290b6f4c2b",
        "InterviewEndDate": "2023-04-11 22:15:22",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7d775698-32b6-47ef-a8b3-e7ef4ed3d706",
        "InterviewEndDate": "2023-04-11 22:13:52",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2ee0d024-3652-4f09-8674-bfb03e95f68c",
        "InterviewEndDate": "2023-04-11 22:03:22",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ebebc3d8-7189-4950-be63-66c5f3f19b1a",
        "InterviewEndDate": "2023-04-11 22:07:34",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "df4c1e70-150f-493d-8d35-8ce0bb91eae9",
        "InterviewEndDate": "2023-04-11 22:13:53",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "d6220c72-d212-4d4b-b1da-f417fa0a1341",
        "InterviewEndDate": "2023-04-11 22:16:46",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "98aa6ae4-cb10-459d-99be-425053eeedfd",
        "InterviewEndDate": "2023-04-11 22:17:39",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8d14f98e-b593-4d23-bba5-670cb8835610",
        "InterviewEndDate": "2023-04-11 22:16:42",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8e521064-3da5-40ea-a3c2-e500061acfaa",
        "InterviewEndDate": "2023-04-11 22:21:25",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "21657fd2-f489-4a41-b3fa-63f49384c304",
        "InterviewEndDate": "2023-04-11 22:21:38",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "cebf8a2a-53ce-463c-b040-0b5c01eac2a6",
        "InterviewEndDate": "2023-04-11 22:19:44",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "e66679f9-3189-425e-a533-22390effdef9",
        "InterviewEndDate": "2023-04-11 22:22:41",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "db7add20-9ab9-4d7c-bb98-67cac612234a",
        "InterviewEndDate": "2023-04-11 22:30:00",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "719269f1-91c1-4fb3-b77f-bd874f1c02ce",
        "InterviewEndDate": "2023-04-11 22:27:11",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "25ee0b96-4cae-40d7-9be4-60f1181935dc",
        "InterviewEndDate": "2023-04-11 22:24:02",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a671c557-818e-49c9-b300-89464a96f835",
        "InterviewEndDate": "2023-04-11 22:30:18",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "bdbdfebb-cc6f-4cee-95db-fd7189a1c8da",
        "InterviewEndDate": "2023-04-11 22:34:35",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "b7a5a429-ffac-407a-b0cd-a3d9d6920e32",
        "InterviewEndDate": "2023-04-11 22:33:16",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "dfdab2d3-a520-47cd-a027-0ff718c3223d",
        "InterviewEndDate": "2023-04-11 22:44:32",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a568bb8d-e790-4c6b-8c00-0c9d316b244b",
        "InterviewEndDate": "2023-04-11 22:42:44",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a60002bb-9a91-45a6-b661-9c7cbd2a0931",
        "InterviewEndDate": "2023-04-14 15:51:51",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c0ceafa4-7a42-45d6-a12e-05ede491ea47",
        "InterviewEndDate": "2023-04-14 15:51:11",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "92294685-19ba-4a2e-a3f9-ffddc81a4e08",
        "InterviewEndDate": "2023-04-14 15:55:16",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4a05176b-adeb-4117-bb9a-f2b353caf71f",
        "InterviewEndDate": "2023-04-14 17:41:29",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3119f5aa-7f4e-4958-92e0-616f47ec6fd6",
        "InterviewEndDate": "2023-04-14 16:02:20",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b8386287-9d06-4b8b-93e6-135776d3aa1c",
        "InterviewEndDate": "2023-04-14 17:00:00",
        "InterviewState": "Completed",
        "Flight": "LX  969",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "dc5ab135-91ea-47e1-8eee-f50f7a904934",
        "InterviewEndDate": "2023-04-14 16:13:47",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7276cf37-aca7-4ed7-9ed7-c60b8ba72c64",
        "InterviewEndDate": "2023-04-14 16:25:59",
        "InterviewState": "Completed",
        "Flight": "LX  969",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "14049155-5130-48f4-9cae-b1c55d41e36e",
        "InterviewEndDate": "2023-04-14 16:48:25",
        "InterviewState": "Completed",
        "Flight": "LX  969",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "57622386-0226-4ea9-a209-0a355fc2bb7d",
        "InterviewEndDate": "2023-04-14 17:19:16",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c1df1196-68e5-49b4-a504-fd6c6d72b65e",
        "InterviewEndDate": "2023-04-14 17:26:53",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "eb5dc311-bc2c-400a-813b-b9a927db4708",
        "InterviewEndDate": "2023-04-14 17:32:29",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2ead4af8-be6c-4b0c-958a-6137e227c859",
        "InterviewEndDate": "2023-04-14 17:40:45",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5e41169a-206a-4a96-acbd-6a1b8d5c7534",
        "InterviewEndDate": "2023-04-14 18:05:43",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b5f81039-50cd-431f-9092-1dcc6309ed1a",
        "InterviewEndDate": "2023-04-14 18:07:05",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "12affa3d-19b5-459e-87c0-9c0db4134f85",
        "InterviewEndDate": "2023-04-14 18:32:34",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e40a1868-9106-4a3e-9ce6-ab9009bec60f",
        "InterviewEndDate": "2023-04-14 18:14:12",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "676855c0-4fb0-4f82-b745-3e4990f45ad9",
        "InterviewEndDate": "2023-04-14 18:10:49",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "42fed580-f3ee-43c0-ae34-52da99603189",
        "InterviewEndDate": "2023-04-14 18:24:24",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "38d01a64-a52b-4fa4-a726-b843acc1f302",
        "InterviewEndDate": "2023-04-14 18:49:56",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8a324a10-94ee-4cc7-878a-908b32bd43de",
        "InterviewEndDate": "2023-04-14 19:25:13",
        "InterviewState": "Completed",
        "Flight": "FR  140",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5a7dbc20-3fc7-4f98-9ccb-73c52521312b",
        "InterviewEndDate": "2023-04-14 18:47:27",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cbf43012-4b1d-4cd4-9f4c-dcd2fc9f52fb",
        "InterviewEndDate": "2023-04-14 20:15:15",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e288727b-f8ee-499c-a420-85bfef6a95a0",
        "InterviewEndDate": "2023-04-14 19:42:23",
        "InterviewState": "Completed",
        "Flight": "FR  140",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d2954810-7091-4680-b1d1-3b8c3c3d0783",
        "InterviewEndDate": "2023-04-14 20:19:35",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e7127cab-799f-4aa9-8968-238a3d1fdb74",
        "InterviewEndDate": "2023-04-14 19:43:42",
        "InterviewState": "Completed",
        "Flight": "FR  140",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "72e06990-d472-4d8d-9f4b-ddd1de22164f",
        "InterviewEndDate": "2023-04-14 19:24:46",
        "InterviewState": "Completed",
        "Flight": "FR  140",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "973f1523-1eb5-4b1a-bdfe-04e623fa0a0e",
        "InterviewEndDate": "2023-04-14 20:16:53",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ccd65e41-1572-4d8e-a025-41a0cee7bda9",
        "InterviewEndDate": "2023-04-14 20:25:04",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "466814f5-34dc-4f92-ae5a-398d78bf006e",
        "InterviewEndDate": "2023-04-14 20:11:10",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cf426515-9925-4097-a23e-620aedbb0f77",
        "InterviewEndDate": "2023-04-14 20:27:14",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f5c022da-1da4-43b8-9afe-a5fb1dd29068",
        "InterviewEndDate": "2023-04-14 20:41:53",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "60ddbc0f-c046-4802-a775-ae14e4b19d6d",
        "InterviewEndDate": "2023-04-14 20:38:05",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "95d4858a-f68a-4390-8c84-68fcb9f60495",
        "InterviewEndDate": "2023-04-14 20:33:42",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cb96eaad-3538-4c47-90a6-74223b1270cb",
        "InterviewEndDate": "2023-04-14 20:53:17",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "31e76768-6490-4011-bcdd-85e1eb4a464a",
        "InterviewEndDate": "2023-04-14 21:21:55",
        "InterviewState": "Completed",
        "Flight": "DY 1109",
        "Dest": "Oslo (OSL)",
        "AirlineCode": "Norwegian Air Shuttle AOC",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b9f0f57c-8686-4034-a819-f8b086371070",
        "InterviewEndDate": "2023-04-14 22:11:43",
        "InterviewState": "Completed",
        "Flight": "LG 9474",
        "Dest": "Luxemburg (LUX)",
        "AirlineCode": "Luxair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2c77202f-4857-44c4-b53f-654add5c8e9b",
        "InterviewEndDate": "2023-04-14 21:53:37",
        "InterviewState": "Completed",
        "Flight": "LG 9474",
        "Dest": "Luxemburg (LUX)",
        "AirlineCode": "Luxair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1a9cf2fd-a87e-4a6d-b849-f63e7efe24d4",
        "InterviewEndDate": "2023-04-14 21:49:07",
        "InterviewState": "Completed",
        "Flight": "LG 9474",
        "Dest": "Luxemburg (LUX)",
        "AirlineCode": "Luxair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2bf8e81e-cc34-4063-8b67-ba76b7b53ffd",
        "InterviewEndDate": "2023-04-14 21:39:20",
        "InterviewState": "Completed",
        "Flight": "DY 1109",
        "Dest": "Oslo (OSL)",
        "AirlineCode": "Norwegian Air Shuttle AOC",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a5f3abd8-7f01-4dc5-a0d4-0034517a396b",
        "InterviewEndDate": "2023-04-14 21:39:25",
        "InterviewState": "Completed",
        "Flight": "LG 9474",
        "Dest": "Luxemburg (LUX)",
        "AirlineCode": "Luxair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9fb0e8be-7a75-4a6f-a16f-4b4627e2bbed",
        "InterviewEndDate": "2023-04-14 22:27:58",
        "InterviewState": "Completed",
        "Flight": "XR  592",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Corendon Airlines Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0eb34390-4e01-4e27-b462-5009d7bf6541",
        "InterviewEndDate": "2023-04-14 22:19:51",
        "InterviewState": "Completed",
        "Flight": "XR  592",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Corendon Airlines Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f00498b7-9996-4efc-87ed-bf116501b7a9",
        "InterviewEndDate": "2023-04-14 22:23:00",
        "InterviewState": "Completed",
        "Flight": "XR  592",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Corendon Airlines Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5d141838-f303-4d1a-a21f-633a10dbd53a",
        "InterviewEndDate": "2023-04-14 22:17:39",
        "InterviewState": "Completed",
        "Flight": "XR  592",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Corendon Airlines Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d01c8283-38af-4b64-b178-10e3b52d8e3f",
        "InterviewEndDate": "2023-04-14 22:41:47",
        "InterviewState": "Completed",
        "Flight": "EZY2604",
        "Dest": "London (LTN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "163d2efc-d1e8-4ea7-9dde-602a4c0ce22d",
        "InterviewEndDate": "2023-04-14 22:55:17",
        "InterviewState": "Completed",
        "Flight": "EZY2604",
        "Dest": "London (LTN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "48b20013-dc06-4f40-8289-16d1632ee730",
        "InterviewEndDate": "2023-04-14 22:52:56",
        "InterviewState": "Completed",
        "Flight": "EZY2604",
        "Dest": "London (LTN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4cddc01c-2283-4846-b95f-44d293daca71",
        "InterviewEndDate": "2023-04-14 23:02:52",
        "InterviewState": "Completed",
        "Flight": "EZY2604",
        "Dest": "London (LTN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "79d9c6ed-0c91-4b4c-aaa0-55a1e7325197",
        "InterviewEndDate": "2023-04-16 12:27:33",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d1ace828-2021-4211-b39a-96fc04b81aaf",
        "InterviewEndDate": "2023-04-16 12:27:34",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e086955a-5349-40dc-aced-606064120f59",
        "InterviewEndDate": "2023-04-16 12:20:52",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5bcf1981-8791-4627-952a-d84226ccce74",
        "InterviewEndDate": "2023-04-16 12:21:51",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "276d32a3-c1fb-455d-b566-1a37301943ea",
        "InterviewEndDate": "2023-04-16 12:12:54",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "57776873-2225-4947-a755-01e3e0ffbe17",
        "InterviewEndDate": "2023-04-16 12:24:48",
        "InterviewState": "Completed",
        "Flight": "EW 6891",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b8a50804-4a4c-43b0-a156-2029fa589746",
        "InterviewEndDate": "2023-04-16 13:06:52",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d0ddab7c-f4de-4c27-a9d1-d8459601354c",
        "InterviewEndDate": "2023-04-16 13:10:18",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "94851399-68cc-46a7-bd66-dcbbe406a05d",
        "InterviewEndDate": "2023-04-16 13:10:22",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "50f47889-cd6e-437d-ab6f-bc66f9cff6b4",
        "InterviewEndDate": "2023-04-16 13:03:32",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "822d72ed-c182-4faa-86e0-038f529fd9ac",
        "InterviewEndDate": "2023-04-16 13:08:40",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dbc1be6e-e6ae-4835-87ae-f9b255fbc75d",
        "InterviewEndDate": "2023-04-16 13:44:12",
        "InterviewState": "Completed",
        "Flight": "TP  533",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 1
    },
    {
        "InterviewId": "606a9653-f25d-4959-bf75-83b7ed09994a",
        "InterviewEndDate": "2023-04-16 13:43:20",
        "InterviewState": "Completed",
        "Flight": "TP  533",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 1
    },
    {
        "InterviewId": "53dcb77d-4307-4295-9194-432c16b2404f",
        "InterviewEndDate": "2023-04-16 13:47:09",
        "InterviewState": "Completed",
        "Flight": "TP  533",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c5fd93b8-28cb-424c-bbe3-465d911f8bbb",
        "InterviewEndDate": "2023-04-16 13:52:20",
        "InterviewState": "Completed",
        "Flight": "TP  533",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 1
    },
    {
        "InterviewId": "611eb066-2a7a-438e-aec2-d98bd752e2dd",
        "InterviewEndDate": "2023-04-16 13:52:22",
        "InterviewState": "Completed",
        "Flight": "TP  533",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6c37f151-ca28-47d7-92bf-e57d436670fc",
        "InterviewEndDate": "2023-04-16 13:55:22",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e82470e2-6a81-4545-b85c-c5ab6872e53e",
        "InterviewEndDate": "2023-04-16 16:08:22",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "565ac1f2-0e04-47c5-8052-81b6dc270596",
        "InterviewEndDate": "2023-04-16 16:43:25",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "395bd5da-5986-4567-ad57-45d2c681bc73",
        "InterviewEndDate": "2023-04-16 15:15:00",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8fca22d5-8de7-4fc4-9abe-3416fd7ec3de",
        "InterviewEndDate": "2023-04-16 14:29:09",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2b74c090-9e3d-43ab-b525-3518a139aa7b",
        "InterviewEndDate": "2023-04-16 15:10:38",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "17db2c98-64ec-4327-881e-9e6557ea8a0f",
        "InterviewEndDate": "2023-04-16 15:13:19",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e3d8936a-5027-48db-846f-d6af44bd3ee1",
        "InterviewEndDate": "2023-04-16 15:19:45",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "65b4cbf6-88a8-430e-a620-964e53a0cc89",
        "InterviewEndDate": "2023-04-16 15:24:50",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "652a3d9f-4fe6-4cdf-9b5d-96ab27602561",
        "InterviewEndDate": "2023-04-16 16:03:48",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9350fb9a-ec61-4c65-af0d-60cc7ea0eee7",
        "InterviewEndDate": "2023-04-16 16:08:22",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5164008f-939a-4f6c-9d31-5f0d0843b383",
        "InterviewEndDate": "2023-04-16 16:06:49",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "552341c6-c453-480b-aa05-86fc3f9c1c69",
        "InterviewEndDate": "2023-04-16 16:03:05",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1527bd57-96a9-40af-aa88-78cb763ab728",
        "InterviewEndDate": "2023-04-16 16:27:31",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "10b3fd3b-2fe0-4adc-9516-efc8e8bf2cbf",
        "InterviewEndDate": "2023-04-16 16:19:59",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "04c27be4-2bc1-4e35-ac4d-89a5e3093fc6",
        "InterviewEndDate": "2023-04-16 16:21:43",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4e720516-edab-498f-be7b-53b101e2ded1",
        "InterviewEndDate": "2023-04-16 16:26:46",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4221c8d4-f8d7-4863-85f7-f1c39ea5b073",
        "InterviewEndDate": "2023-04-16 16:23:43",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ffed5673-b648-4a95-80af-d8765d2292d1",
        "InterviewEndDate": "2023-04-16 16:49:11",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b8e3b7e4-6f4d-4d80-ba77-05a483ee82a1",
        "InterviewEndDate": "2023-04-16 16:43:27",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "eab23727-d3a1-4612-9a38-7b301846700c",
        "InterviewEndDate": "2023-04-16 16:42:18",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c4ceb7f6-834f-4e92-a29c-153c25b61cc9",
        "InterviewEndDate": "2023-04-16 16:47:57",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "505eb235-a0c2-4c12-89ff-672daaf056bb",
        "InterviewEndDate": "2023-04-17 07:50:29",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3597f72c-2973-4973-a196-149b3d44271e",
        "InterviewEndDate": "2023-04-17 08:12:33",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2125993a-b1c0-4173-abca-e559a95842eb",
        "InterviewEndDate": "2023-04-17 07:54:00",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fde4d46b-2e83-43fb-99fb-8952f1df68d8",
        "InterviewEndDate": "2023-04-17 07:58:10",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4f44f8ab-ee45-42d9-bed1-bf75f9456e9d",
        "InterviewEndDate": "2023-04-17 07:57:39",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "899907cf-c486-41b4-8807-bbddc32b9df1",
        "InterviewEndDate": "2023-04-17 08:06:26",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "96686872-6e6d-49f6-8fd3-9308b90a9531",
        "InterviewEndDate": "2023-04-17 08:22:27",
        "InterviewState": "Completed",
        "Flight": "W6 4276",
        "Dest": "Tuzla (TZL)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2508217b-ef9d-4fea-96fc-440bbfa61dd2",
        "InterviewEndDate": "2023-04-17 08:55:55",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b904c9a9-ad6e-4489-9fa8-8cdbf8c51682",
        "InterviewEndDate": "2023-04-17 08:35:37",
        "InterviewState": "Completed",
        "Flight": "W6 4276",
        "Dest": "Tuzla (TZL)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a82f87c6-924e-421d-995e-cd8266f94008",
        "InterviewEndDate": "2023-04-17 08:30:48",
        "InterviewState": "Completed",
        "Flight": "W6 4276",
        "Dest": "Tuzla (TZL)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "32d1b32a-15dc-45f5-8739-9d1ca2c50b6f",
        "InterviewEndDate": "2023-04-17 08:21:49",
        "InterviewState": "Completed",
        "Flight": "W6 4276",
        "Dest": "Tuzla (TZL)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "aed56a9b-0ef4-44a7-853d-7d06759bd12b",
        "InterviewEndDate": "2023-04-17 09:02:28",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "58acf438-e86c-446e-a452-5f261b042a6d",
        "InterviewEndDate": "2023-04-17 09:05:13",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d2e57517-a846-417f-b5cd-d1b5adaa2c6f",
        "InterviewEndDate": "2023-04-17 08:59:10",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "08952216-91fe-416e-a025-6dfafd863ce4",
        "InterviewEndDate": "2023-04-17 08:54:38",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "37cfcb1b-d1e4-4102-ae92-679c83a293a1",
        "InterviewEndDate": "2023-04-17 09:17:02",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "54b56420-b630-4025-b815-f09a0c7434f2",
        "InterviewEndDate": "2023-04-17 09:06:41",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4696e319-be40-47ad-978b-5687a90d2aab",
        "InterviewEndDate": "2023-04-17 09:13:44",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4ce5b12f-8643-4470-a1b8-bbc43e94e469",
        "InterviewEndDate": "2023-04-17 09:16:49",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4fef1271-cb6a-4030-8d33-b8e82ff5bb21",
        "InterviewEndDate": "2023-04-17 09:58:23",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d9912639-8338-43ec-bde1-f4bbeac035a8",
        "InterviewEndDate": "2023-04-17 09:55:18",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9c388129-1b9f-47a1-a499-69d54a17e44d",
        "InterviewEndDate": "2023-04-17 09:48:22",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5f0e6300-d29d-49e5-8f59-f499380cc78c",
        "InterviewEndDate": "2023-04-17 09:35:14",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "51cbaddc-5519-402e-968b-f3be8e11c901",
        "InterviewEndDate": "2023-04-17 09:42:43",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3276e34b-20af-4cb6-8282-0bf721696a6a",
        "InterviewEndDate": "2023-04-17 10:01:01",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "513db8e2-0b42-4035-93a6-92ac321ffe78",
        "InterviewEndDate": "2023-04-17 10:00:55",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f47ce11b-6a15-45c6-9098-ebbe255d735e",
        "InterviewEndDate": "2023-04-17 10:04:25",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b9389abc-4bd5-4973-9dd5-a2f91ab87fc2",
        "InterviewEndDate": "2023-04-17 11:15:14",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dadd4655-cfe9-4d08-aee9-9b4df060f04f",
        "InterviewEndDate": "2023-04-17 11:13:24",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ca7664e1-e8e8-4778-a5a5-76195f8504aa",
        "InterviewEndDate": "2023-04-17 11:11:32",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ac5f91a8-3e04-4fdd-b7bb-c0826bbe9619",
        "InterviewEndDate": "2023-04-17 11:12:46",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bea407d8-25c3-46c9-be8e-f5455d677760",
        "InterviewEndDate": "2023-04-17 11:11:50",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dabfe5b5-7b49-48a8-b977-053c86a8b9f2",
        "InterviewEndDate": "2023-04-17 11:22:04",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2242ff52-a65e-4f36-bbb4-9cb62b1370ac",
        "InterviewEndDate": "2023-04-17 12:12:43",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2ca74b33-9cf7-4f66-964d-753f5f1e51f6",
        "InterviewEndDate": "2023-04-17 12:14:26",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d103398a-e083-43db-aa62-943cdf6a12a1",
        "InterviewEndDate": "2023-04-17 12:17:14",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f4e6e4a3-9bc9-40c5-be57-20cc300698a7",
        "InterviewEndDate": "2023-04-17 12:07:41",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6562d67d-4362-413f-8932-cdd6117e9f08",
        "InterviewEndDate": "2023-04-17 12:14:28",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0af36072-ea56-4a3a-8478-2e54b600ec08",
        "InterviewEndDate": "2023-04-17 12:21:39",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "33008a81-2ea9-4bed-ab06-a7ab3cba7d05",
        "InterviewEndDate": "2023-04-17 12:27:27",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f5088d22-56f4-4574-a0fb-f0be4aa6c522",
        "InterviewEndDate": "2023-04-17 13:23:25",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6efb8c14-f6bb-49c4-9335-05d9be75dd3f",
        "InterviewEndDate": "2023-04-17 13:23:18",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b17038f6-117e-430b-9d47-8f580241bf7a",
        "InterviewEndDate": "2023-04-17 13:17:48",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "08ccd3e4-093d-4f3d-b025-6fe1721bb25b",
        "InterviewEndDate": "2023-04-17 13:21:57",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "40f23616-95f8-41dc-bb72-af68788a6253",
        "InterviewEndDate": "2023-04-17 13:27:39",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9da8de1d-5e18-41c3-9a89-9ef6431981a7",
        "InterviewEndDate": "2023-04-17 13:23:40",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b50ed0ef-2b3f-4f52-ab4f-0f726f2e3aab",
        "InterviewEndDate": "2023-04-17 14:21:26",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2c3da12e-7426-40e6-8526-fb625f89741e",
        "InterviewEndDate": "2023-04-17 14:12:23",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2a8ca169-5353-4864-99df-37bf146aac7b",
        "InterviewEndDate": "2023-04-17 14:07:43",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2a41c863-3f98-49aa-a1ac-b4eb6dbec6d3",
        "InterviewEndDate": "2023-04-17 14:17:55",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "60a4a2b2-7d63-46cd-8e83-fb029abb5edc",
        "InterviewEndDate": "2023-04-18 07:06:04",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "78ea513f-0761-4ccf-82ae-f74f392412c3",
        "InterviewEndDate": "2023-04-18 07:10:24",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e30fe18f-7883-426e-bd68-5d565839b525",
        "InterviewEndDate": "2023-04-18 06:51:25",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "35fa7380-5f3e-4304-a952-d96495b285c2",
        "InterviewEndDate": "2023-04-18 07:14:29",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c02c81dc-c306-4eb5-a473-b7fb8e59031b",
        "InterviewEndDate": "2023-04-18 07:14:19",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "023590cc-1c0a-4269-95d3-99f022b45ea7",
        "InterviewEndDate": "2023-04-18 07:04:34",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f0a761de-3e81-4423-b693-f43b346f20bc",
        "InterviewEndDate": "2023-04-18 08:01:44",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2fb0db46-10c3-4488-9d79-b8490c781c81",
        "InterviewEndDate": "2023-04-18 07:59:21",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ab997c81-27b1-4a62-9e8e-053a1d68aec4",
        "InterviewEndDate": "2023-04-18 07:57:17",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a183c95e-b809-4d3b-abdd-2a1b50f9bb87",
        "InterviewEndDate": "2023-04-18 08:04:43",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "44744b51-922a-466e-9343-cc408e009262",
        "InterviewEndDate": "2023-04-18 07:59:25",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2674647c-1376-479b-9c93-87cb0b715a20",
        "InterviewEndDate": "2023-04-18 08:02:31",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "037b4369-7369-4537-bb46-7523c5ba45b9",
        "InterviewEndDate": "2023-04-18 08:11:07",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "140dcc14-137b-468f-981f-a778efa9c806",
        "InterviewEndDate": "2023-04-18 08:13:40",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5e8f0437-504c-470a-9e73-dce046b362c5",
        "InterviewEndDate": "2023-04-18 08:10:38",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d941ab08-9b36-4eb9-a2c0-6cf648751eff",
        "InterviewEndDate": "2023-04-18 09:01:46",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4a7d44be-b448-4ab8-8d4c-3b5439585eeb",
        "InterviewEndDate": "2023-04-18 08:15:35",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5efbaf29-69ce-4b5f-8d0e-f93184e4b0d3",
        "InterviewEndDate": "2023-04-18 09:01:31",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e92b6666-c4ee-4dfd-b42e-1f9e72311f8c",
        "InterviewEndDate": "2023-04-18 08:51:26",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "584045c5-9cf1-41e0-b1fa-f5035526046c",
        "InterviewEndDate": "2023-04-18 09:00:08",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8e99d457-5e2e-43de-a0be-e7305353db48",
        "InterviewEndDate": "2023-04-18 09:00:41",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7e975677-cc50-44dd-ae3c-18f266e53fbd",
        "InterviewEndDate": "2023-04-18 08:57:00",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "860842d5-f659-4e56-9492-5449b496d605",
        "InterviewEndDate": "2023-04-18 09:05:37",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "79ddf137-4c27-4638-9e19-734830e6aff4",
        "InterviewEndDate": "2023-04-18 09:15:58",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1b2125da-98a0-4db2-84d5-19db0a89aa8c",
        "InterviewEndDate": "2023-04-18 12:04:35",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ba09d8e1-2a50-4624-a74d-3fb9613033f9",
        "InterviewEndDate": "2023-04-18 09:38:08",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5244dac2-4b11-4c80-b57b-19a652b536b4",
        "InterviewEndDate": "2023-04-18 09:41:44",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a2dd4523-4408-4c65-8b85-21a7937871af",
        "InterviewEndDate": "2023-04-18 11:45:38",
        "InterviewState": "Completed",
        "Flight": "FR 3309",
        "Dest": "Bari (BRI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae7a6da6-9b8f-4c4e-9823-7f54da637de8",
        "InterviewEndDate": "2023-04-18 11:30:45",
        "InterviewState": "Completed",
        "Flight": "FR 3309",
        "Dest": "Bari (BRI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "88bf257f-e428-41bf-b9d9-16163c73f04e",
        "InterviewEndDate": "2023-04-18 11:30:15",
        "InterviewState": "Completed",
        "Flight": "FR 3309",
        "Dest": "Bari (BRI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "65b4b659-18ec-4536-aa21-be71ee310b08",
        "InterviewEndDate": "2023-04-18 12:17:39",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8d82e2e8-9d1a-4f74-87c6-2dae7942d378",
        "InterviewEndDate": "2023-04-18 11:53:32",
        "InterviewState": "Completed",
        "Flight": "FR 3309",
        "Dest": "Bari (BRI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6db1f93a-a193-45b8-ad22-a1f1fe53a675",
        "InterviewEndDate": "2023-04-18 12:09:54",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3810a43c-1c38-4218-9b0f-03586c6599f2",
        "InterviewEndDate": "2023-04-18 12:32:39",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "eeb6a5e1-7311-4d2d-82b3-58847f9ed4df",
        "InterviewEndDate": "2023-04-18 12:25:48",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c98da8ea-ceb9-4d97-bdec-275c76e71719",
        "InterviewEndDate": "2023-04-18 12:27:05",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "08450782-7331-47ce-aee4-7970224ca3e6",
        "InterviewEndDate": "2023-04-19 09:32:48",
        "InterviewState": "Completed",
        "Flight": "LH 1929",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f02128ab-e0b6-4522-8a79-b8d617ba1c71",
        "InterviewEndDate": "2023-04-19 09:25:56",
        "InterviewState": "Completed",
        "Flight": "LH 1929",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "82d8bb57-c3ea-4532-b39d-c118c1980db7",
        "InterviewEndDate": "2023-04-19 08:58:40",
        "InterviewState": "Completed",
        "Flight": "LH 1929",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dcdd582a-df4e-4d39-89ff-76b1ea935d2c",
        "InterviewEndDate": "2023-04-19 08:57:38",
        "InterviewState": "Completed",
        "Flight": "LH 1929",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "efdaeb1e-e85a-4e2e-881b-5691320946d0",
        "InterviewEndDate": "2023-04-19 09:51:16",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3a7bf0ea-ed88-45b2-9698-a6e2de0fb93b",
        "InterviewEndDate": "2023-04-19 09:50:28",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "49415ed5-b08b-4a9b-8c32-4b94828a5ffe",
        "InterviewEndDate": "2023-04-19 10:03:44",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "64611224-7733-49e5-b336-a63412b478d3",
        "InterviewEndDate": "2023-04-19 09:56:33",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8b737cce-05a9-43d8-a33a-6d4b18812f3b",
        "InterviewEndDate": "2023-04-19 10:09:37",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7f9d1c17-87ba-4219-b13e-6723b6ab23fe",
        "InterviewEndDate": "2023-04-19 10:00:15",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "41810811-f594-435e-a58b-e676027d511d",
        "InterviewEndDate": "2023-04-19 10:05:39",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a35ab791-9802-4286-9a25-2f696f7be513",
        "InterviewEndDate": "2023-04-19 10:07:56",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a774426f-063b-46c6-a5d7-5762acbcb57e",
        "InterviewEndDate": "2023-04-19 10:07:13",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "77b5d86e-1d50-4af9-a32f-345e6b9ac9c8",
        "InterviewEndDate": "2023-04-19 11:12:33",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "24eec58f-f929-4d1f-9f59-1b7b0527c319",
        "InterviewEndDate": "2023-04-19 11:00:15",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3b3ddb9c-f6ca-411f-be53-85f4ac35773a",
        "InterviewEndDate": "2023-04-19 11:10:38",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dc993864-37f8-4ef1-9b16-1a142f983ed8",
        "InterviewEndDate": "2023-04-19 10:23:12",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c45e0f8b-debd-4246-a789-a85f0a7d6106",
        "InterviewEndDate": "2023-04-19 11:16:09",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f08b6159-308a-448f-bd57-3930b45e57cf",
        "InterviewEndDate": "2023-04-19 11:19:49",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0b5cfd09-32bd-4489-8b60-15d53030ba89",
        "InterviewEndDate": "2023-04-19 10:55:21",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9c6a0a6e-756e-4c73-bb2e-7f8be373ff13",
        "InterviewEndDate": "2023-04-19 11:16:03",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1cc88971-9e56-4885-9f64-aa3f16b9b9a5",
        "InterviewEndDate": "2023-04-19 11:13:22",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c9534b35-9fb0-4022-b919-9e3662126c82",
        "InterviewEndDate": "2023-04-19 11:20:18",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a90a2adb-1ad6-4e3c-9624-a0a10124e7fc",
        "InterviewEndDate": "2023-04-19 13:09:35",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8053a269-90ce-44fb-93e0-690eca4a8b8d",
        "InterviewEndDate": "2023-04-19 13:22:11",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8328860d-5bc7-4ec7-888d-16381cc6551c",
        "InterviewEndDate": "2023-04-19 12:05:05",
        "InterviewState": "Completed",
        "Flight": "EJU5283",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "af763581-08f4-4b09-be27-aa989e685951",
        "InterviewEndDate": "2023-04-19 12:03:28",
        "InterviewState": "Completed",
        "Flight": "EJU5283",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ee88bb32-dc14-4562-9177-881163600991",
        "InterviewEndDate": "2023-04-19 12:05:48",
        "InterviewState": "Completed",
        "Flight": "EJU5283",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0d4e6254-1048-4f75-aa46-fe1e8a3eadaf",
        "InterviewEndDate": "2023-04-19 12:13:50",
        "InterviewState": "Completed",
        "Flight": "EJU5283",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fe22140d-206b-4d57-9d7c-6bc2d7126fd6",
        "InterviewEndDate": "2023-04-19 12:21:01",
        "InterviewState": "Completed",
        "Flight": "EJU5283",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7a53299f-a1a2-4c22-8356-d8d3d672dc3b",
        "InterviewEndDate": "2023-04-19 13:53:03",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f4fc24db-1597-4c8d-9ee0-2840ba941ef1",
        "InterviewEndDate": "2023-04-19 13:18:59",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1691c695-a5b1-4ceb-b5da-0c9995795a22",
        "InterviewEndDate": "2023-04-19 13:26:02",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b922345a-0747-49e6-b89d-ef7fa9840a23",
        "InterviewEndDate": "2023-04-19 13:20:01",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bd61b403-ec67-4f7e-ad08-54b3ff1748ae",
        "InterviewEndDate": "2023-04-19 13:27:33",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bff8f210-fd3f-4ba2-b627-2f6e0a5a45a8",
        "InterviewEndDate": "2023-04-19 13:57:07",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1261c2e1-2b42-4ac1-82a3-3a09c91b6d7b",
        "InterviewEndDate": "2023-04-19 14:00:03",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "df4cd318-5939-40aa-b381-e1a26c9f31d7",
        "InterviewEndDate": "2023-04-19 14:07:49",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2f5c6245-de96-4271-ac4b-40af8e0ca9f0",
        "InterviewEndDate": "2023-04-19 15:23:30",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0fe0952b-c844-46bd-a57f-6311f078f2ed",
        "InterviewEndDate": "2023-04-19 14:04:38",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8ea22bbf-a6d4-4e61-b03b-3de65d3431cc",
        "InterviewEndDate": "2023-04-19 14:09:13",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fd6ef318-993f-4c73-9a29-04785ee436c2",
        "InterviewEndDate": "2023-04-19 14:54:57",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ff9d994a-11f4-4810-ae02-3de93de6e38b",
        "InterviewEndDate": "2023-04-19 15:00:47",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6126fb7a-e25b-46f1-b719-bc40c077575e",
        "InterviewEndDate": "2023-04-19 14:19:37",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "25454198-68b6-4369-8c3a-86d422b8dbe1",
        "InterviewEndDate": "2023-04-19 14:24:19",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3c18e70d-cc21-472c-b54d-b70e86544bb4",
        "InterviewEndDate": "2023-04-19 14:30:50",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c821b0d7-350d-47f2-88d6-eadeacbd4059",
        "InterviewEndDate": "2023-04-19 14:49:43",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dfd2b07b-9395-416a-95a9-ae10fb9d8df8",
        "InterviewEndDate": "2023-04-19 15:11:03",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0405da19-3781-4c5a-8cc1-a458ad805e60",
        "InterviewEndDate": "2023-04-19 15:20:28",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2616c57a-d633-451d-91be-53ea0db51d8c",
        "InterviewEndDate": "2023-04-19 16:44:11",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b975a692-f500-49ac-97e1-5fc28008589f",
        "InterviewEndDate": "2023-04-19 16:41:19",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "60f6a863-8177-4299-afc6-4c5bc44189ca",
        "InterviewEndDate": "2023-04-19 16:39:24",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a32ac42a-0a2e-4699-a036-3a0f205ea02b",
        "InterviewEndDate": "2023-04-19 16:46:52",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4a8c024b-56a5-41cb-a334-90aad980f648",
        "InterviewEndDate": "2023-04-19 16:51:11",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "405d9b1b-1578-4d49-891f-d61679cc0ab9",
        "InterviewEndDate": "2023-04-19 17:17:47",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5b5ce09b-b70e-4f31-83fd-055a61df4fb7",
        "InterviewEndDate": "2023-04-19 17:07:53",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9ef52b7f-62d0-4c15-8805-1c47c77621b2",
        "InterviewEndDate": "2023-04-19 17:08:41",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "acfde210-97f3-4467-8bd8-e5eb37a1db81",
        "InterviewEndDate": "2023-04-19 17:18:18",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "629f96ec-9729-4504-a90f-9bcaffb29ade",
        "InterviewEndDate": "2023-04-19 18:35:10",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e61cc991-50ea-42c1-9e14-aeee6b91a1a6",
        "InterviewEndDate": "2023-04-19 17:43:16",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c620fedd-8bd9-4fd1-b3b5-942ec4fecbd4",
        "InterviewEndDate": "2023-04-19 17:47:48",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b49a8005-a346-4f68-a33a-0d97638176ff",
        "InterviewEndDate": "2023-04-19 17:55:30",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "379faa77-6eb0-44ad-86d9-86d276dfb479",
        "InterviewEndDate": "2023-04-19 18:02:13",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cecc1219-bd75-4e29-a1ac-2948c617df61",
        "InterviewEndDate": "2023-04-19 18:42:55",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7ffdbf30-73fb-4fe9-9bcd-beec6ad7d18b",
        "InterviewEndDate": "2023-04-19 18:40:18",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "75614acb-6599-4f81-ad77-f4e9140321f5",
        "InterviewEndDate": "2023-04-19 18:47:11",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9a17d508-7e90-4713-8e8b-963158821d91",
        "InterviewEndDate": "2023-04-19 18:35:23",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cf1700b3-1c81-408e-96d3-b9e307d20b22",
        "InterviewEndDate": "2023-04-19 19:11:14",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3c57e989-ce3a-4df9-ab22-11e1b7c591fc",
        "InterviewEndDate": "2023-04-19 19:26:42",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "bce11193-7f61-461e-8f94-fcaed230dc15",
        "InterviewEndDate": "2023-04-19 19:40:18",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fbe34fe4-29cd-436c-9678-88c81a769741",
        "InterviewEndDate": "2023-04-19 19:34:54",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "eb258067-1043-41d5-84af-352cf02719c0",
        "InterviewEndDate": "2023-04-19 19:57:30",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4d493cf9-7a27-4f65-a3ba-1aaf0b0e7b86",
        "InterviewEndDate": "2023-04-19 19:30:52",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "eb82ca04-46a9-40d0-ba06-3e55bc82698b",
        "InterviewEndDate": "2023-04-19 19:17:43",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "23cb1fee-7d28-49ed-ac2c-e9f353abe829",
        "InterviewEndDate": "2023-04-19 20:07:42",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a3febe6f-2b3c-4a1f-a213-8d528f0ad235",
        "InterviewEndDate": "2023-04-19 20:09:38",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3775ac19-e17b-4e79-97a4-c3288b44813d",
        "InterviewEndDate": "2023-04-19 20:05:40",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3116dd28-4c3f-4713-859a-23f3d1d36a7c",
        "InterviewEndDate": "2023-04-19 19:58:20",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "38c8f4bc-5677-4fb4-ba2d-08f50805297c",
        "InterviewEndDate": "2023-04-19 20:23:12",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fd1981b1-d4e5-464e-96e8-a7a6809a940e",
        "InterviewEndDate": "2023-04-19 20:27:20",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "30686769-e744-4144-9d9d-12bb3d903555",
        "InterviewEndDate": "2023-04-19 20:15:40",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f039e651-2767-4200-800b-405e4e5758bf",
        "InterviewEndDate": "2023-04-19 20:37:19",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "da2a2b96-9152-4ce4-9022-4f70c595717c",
        "InterviewEndDate": "2023-04-19 20:30:04",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6901cb80-7462-49ff-89ad-7bcbd125a6a1",
        "InterviewEndDate": "2023-04-19 20:42:50",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e9a7f3b5-7968-43ea-a1d3-697893f724e5",
        "InterviewEndDate": "2023-04-19 20:44:03",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9d656ece-79cc-4967-ae9d-01b428f9cb15",
        "InterviewEndDate": "2023-04-19 21:10:08",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5c5b6f46-f0db-4b75-ab6b-d2fb7c89868a",
        "InterviewEndDate": "2023-04-19 21:16:38",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "aad8358f-8f4f-47bc-93bb-dc71eecd2419",
        "InterviewEndDate": "2023-04-19 21:14:53",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "bad99eee-5105-4cba-a545-bc22436b988b",
        "InterviewEndDate": "2023-04-19 21:07:51",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "95550b95-0a74-4075-a6f6-e148bf2849e6",
        "InterviewEndDate": "2023-04-19 21:02:16",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "abbcfdf1-ae75-4504-89b2-68fcfb424d95",
        "InterviewEndDate": "2023-04-19 21:54:38",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "45d07487-fe22-48c3-9118-1967df9e921a",
        "InterviewEndDate": "2023-04-19 21:44:36",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "679fcc79-8ba3-470f-9bf4-b0efd3833a4d",
        "InterviewEndDate": "2023-04-19 21:38:07",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1e1cafbe-295c-49cb-88c9-5219aef877b6",
        "InterviewEndDate": "2023-04-19 21:48:56",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "945b95b2-83c0-4ec7-b5fe-a30826b069f2",
        "InterviewEndDate": "2023-04-19 21:42:55",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ca23c8f4-e344-47c0-924a-32ec98ed6ada",
        "InterviewEndDate": "2023-04-19 21:49:54",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "431aa532-dafc-466a-b912-ce68621ab080",
        "InterviewEndDate": "2023-04-19 22:10:10",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "309a3540-12fd-48b5-8016-06fd0dbbc733",
        "InterviewEndDate": "2023-04-19 21:54:29",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "dacb70cc-6a0a-4924-9c40-e4c55897c4a8",
        "InterviewEndDate": "2023-04-19 22:06:11",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "07d67b87-194d-445d-b128-9c43c0dc3754",
        "InterviewEndDate": "2023-04-19 22:05:36",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ddc42a84-21cf-4a19-b311-fb66acb389c5",
        "InterviewEndDate": "2023-04-19 22:27:40",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8a77a174-a2c1-4a88-b33e-2b51ec6c7e12",
        "InterviewEndDate": "2023-04-19 22:11:02",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "20280767-4cd3-4a73-8b6c-c3e257f62fd2",
        "InterviewEndDate": "2023-04-19 22:28:32",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0da6d10b-a29c-4500-a040-0feae8de3ac7",
        "InterviewEndDate": "2023-04-19 22:27:04",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a92bb8a9-ca3e-4853-8c23-040a6f19a294",
        "InterviewEndDate": "2023-04-19 22:33:13",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d79a21b2-2e49-44c0-93ba-ea41818ef00e",
        "InterviewEndDate": "2023-04-19 22:30:26",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a30ef969-6769-41d7-88e0-bb568fdb0f04",
        "InterviewEndDate": "2023-04-19 22:47:05",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "32127cfa-954f-48f5-8e9d-c97e57090943",
        "InterviewEndDate": "2023-04-19 22:40:17",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7b7c3e8d-ee5d-46fa-b681-4eb4df9ce225",
        "InterviewEndDate": "2023-04-19 22:55:35",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "15ba6aac-0406-4fc4-867b-c3b3a60756e5",
        "InterviewEndDate": "2023-04-19 22:45:10",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "720300f0-a86b-4a8f-9cbc-3c1cced7b060",
        "InterviewEndDate": "2023-04-19 23:07:49",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1816e730-2073-4cee-a51b-81c7651b4522",
        "InterviewEndDate": "2023-04-21 15:24:17",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7295f3ba-bbc2-431f-babd-ebb6718613ea",
        "InterviewEndDate": "2023-04-21 15:23:10",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d456f325-e0cf-4946-bfda-84da94b0b0cb",
        "InterviewEndDate": "2023-04-21 15:37:49",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e9cf4a70-1439-470d-b3f7-f162ad3f0d4c",
        "InterviewEndDate": "2023-04-21 15:29:21",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b71a9e56-d100-4dc4-bdd4-51cfeaaebf37",
        "InterviewEndDate": "2023-04-21 15:25:22",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4333cf4d-7617-4ce1-abbe-21266e627391",
        "InterviewEndDate": "2023-04-21 15:38:26",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b4d99d95-6665-4285-89f1-27dc82178161",
        "InterviewEndDate": "2023-04-21 16:05:58",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6a5b9347-ea34-4e46-9297-c51e3fedc7c7",
        "InterviewEndDate": "2023-04-21 15:55:32",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "bf792b98-47ac-4d54-a3fa-d3f86170c243",
        "InterviewEndDate": "2023-04-21 15:57:17",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "34349ec1-0db5-48d6-a284-dab386d579b8",
        "InterviewEndDate": "2023-04-21 16:13:09",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "913ddabb-e4ed-4a20-ac5a-a85faeecb358",
        "InterviewEndDate": "2023-04-21 15:50:23",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9381ea26-0da3-4d2f-90e1-5000e0655b1b",
        "InterviewEndDate": "2023-04-21 16:04:36",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "911997b3-7800-4e17-8092-cd1d677b5934",
        "InterviewEndDate": "2023-04-21 16:15:17",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f172d6ff-3818-4b47-9860-ca3addc6249d",
        "InterviewEndDate": "2023-04-21 16:35:30",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "275c96b2-7be4-4312-b27b-b803032edd5d",
        "InterviewEndDate": "2023-04-21 16:43:18",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a66dd750-84ef-4973-9d12-bfb325bae005",
        "InterviewEndDate": "2023-04-21 16:39:01",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6a2a810d-d9ed-49a5-b557-50c1e92af48c",
        "InterviewEndDate": "2023-04-21 17:01:44",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "22de4b24-137a-4c6e-8814-bf11133a7f94",
        "InterviewEndDate": "2023-04-21 16:36:34",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "35e7e269-35e2-49d1-99fa-01844efd76b5",
        "InterviewEndDate": "2023-04-21 17:04:27",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5df89b72-e3fa-43e2-998b-f18ae2e913ea",
        "InterviewEndDate": "2023-04-21 17:06:05",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7f0f3d12-d700-43b4-8cf7-3078af5986f4",
        "InterviewEndDate": "2023-04-21 17:04:43",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4d1a4092-0518-487a-8fed-882e02208e45",
        "InterviewEndDate": "2023-04-21 17:06:03",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "631dfbe3-15d5-410c-8ea7-4660dee29b77",
        "InterviewEndDate": "2023-04-21 17:18:19",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "07759906-da30-4d3d-afba-26314c5202fd",
        "InterviewEndDate": "2023-04-21 17:33:59",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2a6eed42-8c96-4034-8f90-c19563653727",
        "InterviewEndDate": "2023-04-21 17:39:24",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f85b1592-da55-4a55-a807-2d902c7cc3cb",
        "InterviewEndDate": "2023-04-21 18:14:13",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1ef9569a-9bd5-4282-a880-6d024e3735b4",
        "InterviewEndDate": "2023-04-21 18:11:07",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9b3439af-7ad2-48fd-9498-331cdf01230c",
        "InterviewEndDate": "2023-04-21 17:55:12",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ffc6ebc9-3046-473e-aaa9-6d32990f3557",
        "InterviewEndDate": "2023-04-21 17:55:00",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2119f4c7-ad4b-4037-b92b-785aa5a04a10",
        "InterviewEndDate": "2023-04-21 18:04:31",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d5755ec0-1e42-480b-93fa-350f8de0931d",
        "InterviewEndDate": "2023-04-21 18:14:49",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "180c1fea-e172-4856-8ea2-073f7a38eb0e",
        "InterviewEndDate": "2023-04-21 18:38:37",
        "InterviewState": "Completed",
        "Flight": "EW 8230",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8d3b10dc-3bd8-4897-8172-53ff7661ae41",
        "InterviewEndDate": "2023-04-21 18:38:24",
        "InterviewState": "Completed",
        "Flight": "EW 8230",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "44bacb2c-8ce6-47a4-9218-ca4b7539e59a",
        "InterviewEndDate": "2023-04-21 18:29:01",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f0ff3e45-287e-48c8-86f2-44a0e4083378",
        "InterviewEndDate": "2023-04-21 18:48:05",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e3aa091d-6df8-4d0b-b2e6-a1505bbf8d3c",
        "InterviewEndDate": "2023-04-21 18:27:58",
        "InterviewState": "Completed",
        "Flight": "EW 8230",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4570f3f5-06f5-48b5-b79c-ddff6eb1707b",
        "InterviewEndDate": "2023-04-21 18:53:28",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "de86e173-3d32-46ed-8591-11aa1f6a2766",
        "InterviewEndDate": "2023-04-21 18:45:30",
        "InterviewState": "Completed",
        "Flight": "EW 8230",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2998a433-3877-4365-a521-373460bce5ae",
        "InterviewEndDate": "2023-04-21 18:49:31",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "086e0842-ff5a-4075-86b7-182acdb2b5d9",
        "InterviewEndDate": "2023-04-21 19:15:31",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a89b6094-ca3e-40ae-88c3-be8d272d1756",
        "InterviewEndDate": "2023-04-21 19:40:24",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "04601c4a-867c-4ccc-95e3-ba5d8bd2e725",
        "InterviewEndDate": "2023-04-21 19:29:10",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "43fd651f-9918-4312-868f-71be388f05af",
        "InterviewEndDate": "2023-04-21 19:38:40",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6d31a0a1-fe5f-4486-9a12-f4bbc49778be",
        "InterviewEndDate": "2023-04-21 19:36:14",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "96e59495-37a5-4bba-ba4a-9a5d32655a5e",
        "InterviewEndDate": "2023-04-21 20:36:19",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7b596dd4-3d9c-446b-92b4-1f4bf15b913a",
        "InterviewEndDate": "2023-04-21 21:03:11",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "39e4f470-a516-42f7-a9a6-ae3fca4bdaff",
        "InterviewEndDate": "2023-04-21 21:02:11",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b33f8a2e-f270-431f-bf0f-c4c8156713ed",
        "InterviewEndDate": "2023-04-21 20:51:51",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b4695bf8-fe30-4bd6-a4c7-881933f95de1",
        "InterviewEndDate": "2023-04-21 19:59:46",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5e73f932-df30-465c-9f56-c3b4c2ea4877",
        "InterviewEndDate": "2023-04-21 20:05:11",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "af51fb19-16c4-4fe0-a80a-c612c02aca9d",
        "InterviewEndDate": "2023-04-21 20:07:49",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9832dc5f-0010-4613-902a-0d100d85395d",
        "InterviewEndDate": "2023-04-21 20:55:04",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9c5f3e4d-1a58-4490-a619-ef46d2413587",
        "InterviewEndDate": "2023-04-21 21:11:57",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8e4f8445-9337-42e2-b868-4b1e73617440",
        "InterviewEndDate": "2023-04-21 21:13:54",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "81d1b2bd-edf6-47b5-a4f5-e81262ea2c36",
        "InterviewEndDate": "2023-04-21 21:32:03",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cf0a0531-484a-454a-b717-c346f6fdbda3",
        "InterviewEndDate": "2023-04-21 21:39:35",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8f102b03-e006-4118-88c9-9321585baa4f",
        "InterviewEndDate": "2023-04-21 21:39:36",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "deaa6028-497b-41d9-a115-b8f05d98f7cc",
        "InterviewEndDate": "2023-04-21 21:33:05",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "07a9243d-3b8a-4abf-8895-12083a90b165",
        "InterviewEndDate": "2023-04-21 21:27:20",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f93a864a-806b-42b4-9ea2-3fe198d5423a",
        "InterviewEndDate": "2023-04-21 21:43:01",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ce65bb5d-e9f0-4ae2-87d7-f20d45642574",
        "InterviewEndDate": "2023-04-21 21:55:37",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0f87ff12-367b-4ee7-8cc5-70c8d59cf186",
        "InterviewEndDate": "2023-04-21 21:47:51",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "60dc1667-1571-474d-a29d-673946dad2c6",
        "InterviewEndDate": "2023-04-21 22:07:40",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    }
]    

 `;