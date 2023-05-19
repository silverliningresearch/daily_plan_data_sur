let interview_data_raw = `[
    {
        "InterviewId": "bcc2edc7-5e3e-4fe6-9807-e831231a82cb",
        "InterviewEndDate": "2023-05-04 10:45:58",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999,
        "download_time": "19-05-2023 05:21:50"
    },
    {
        "InterviewId": "53beb8d9-b4ca-42e3-b6c8-2a906a003c33",
        "InterviewEndDate": "2023-05-04 14:45:04",
        "InterviewState": "Completed",
        "Dest": "ARN",
        "AirlineCode": "SK",
        "InterviewerID": 999
    },
    {
        "InterviewId": "a7144b71-3ebf-4f56-be50-c76c75239562",
        "InterviewEndDate": "2023-05-04 17:08:27",
        "InterviewState": "Completed",
        "Dest": "AYT",
        "AirlineCode": "FH",
        "InterviewerID": 999
    },
    {
        "InterviewId": "4fcc62b8-7c04-4fa6-8c66-30bbea277b46",
        "InterviewEndDate": "2023-05-09 10:05:55",
        "InterviewState": "Completed",
        "Dest": "AAL",
        "AirlineCode": "SK",
        "InterviewerID": 999
    },
    {
        "InterviewId": "1f7db144-861c-404e-8efd-8828671c4814",
        "InterviewEndDate": "2023-05-09 10:05:35",
        "InterviewState": "Completed",
        "Dest": "AAL",
        "AirlineCode": "SK",
        "InterviewerID": 999
    },
    {
        "InterviewId": "8bb56fa9-6aec-4d35-ae3c-c3d6eeff1724",
        "InterviewEndDate": "2023-05-05 06:00:33",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 999
    },
    {
        "InterviewId": "058ff12f-8add-41da-b9af-157fe352c9a9",
        "InterviewEndDate": "2023-05-05 10:03:39",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "c6496d55-edb7-4604-953a-510b8867b5a8",
        "InterviewEndDate": "2023-05-05 10:52:20",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "21ec7c44-f690-4c2d-8768-d8d151e01ecc",
        "InterviewEndDate": "2023-05-05 11:02:46",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "8b40cdec-d56d-4cd9-879b-535fa12578e1",
        "InterviewEndDate": "2023-05-09 07:24:16",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "02580d3f-83a6-49a2-8aa8-7e42450acf3b",
        "InterviewEndDate": "2023-05-09 07:33:36",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "add32949-b930-49b6-9959-d43b95e70801",
        "InterviewEndDate": "2023-05-09 07:35:25",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "83b5f5d6-f64f-4902-a3f7-4b1c7fd9ea4b",
        "InterviewEndDate": "2023-05-09 14:29:16",
        "InterviewState": "Completed",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 999
    },
    {
        "InterviewId": "56b0f5a5-8ee1-4c8e-b233-a8c0e78ca8d6",
        "InterviewEndDate": "2023-05-10 13:26:01",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "42ae659b-e7d8-4176-b167-2b3098a5423d",
        "InterviewEndDate": "2023-05-15 12:50:45",
        "InterviewState": "Completed",
        "Dest": "AGP",
        "AirlineCode": "FR",
        "InterviewerID": 999
    },
    {
        "InterviewId": "c8c43a24-0911-4fad-8079-bac61a325b3b",
        "InterviewEndDate": "2023-05-15 12:53:22",
        "InterviewState": "Completed",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "InterviewerID": 999
    },
    {
        "InterviewId": "ebeef1cb-c8d6-4ef4-b30f-4c6c908d5259",
        "InterviewEndDate": "2023-05-15 12:55:38",
        "InterviewState": "Completed",
        "Dest": "LGW",
        "AirlineCode": "EZY",
        "InterviewerID": 999
    },
    {
        "InterviewId": "0abcb1ed-8ace-4b33-bc1a-e7c4b3f346fe",
        "InterviewEndDate": "2023-05-16 08:17:23",
        "InterviewState": "Completed",
        "Dest": "KRP",
        "AirlineCode": "DX",
        "InterviewerID": 999
    },
    {
        "InterviewId": "f89bac57-4b2f-4528-96de-2a8f30f09385",
        "InterviewEndDate": "2023-05-16 09:36:09",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "05a5cad1-f321-4d57-b258-38c6bf8e18dd",
        "InterviewEndDate": "2023-05-17 07:31:36",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "d9ee496c-c604-4e98-a4e5-54266ebed0c9",
        "InterviewEndDate": "2023-05-17 07:52:30",
        "InterviewState": "Completed",
        "Dest": "KRP",
        "AirlineCode": "DX",
        "InterviewerID": 999
    },
    {
        "InterviewId": "023dc367-d216-4a64-baf0-79889b925484",
        "InterviewEndDate": "2023-05-17 07:53:43",
        "InterviewState": "Completed",
        "Dest": "KRP",
        "AirlineCode": "DX",
        "InterviewerID": 999
    },
    {
        "InterviewId": "766d1358-a2c4-4712-8aa8-0a45ebb142da",
        "InterviewEndDate": "2023-05-17 10:01:17",
        "InterviewState": "Completed",
        "Dest": "KRP",
        "AirlineCode": "DX",
        "InterviewerID": 999
    }
]    

 `;