import * as dgram from "dgram";
import {DNSPacket} from "./DNSPacket.type";
import {dnsPacketEncode} from "./DNSHeaderEncoder";

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const udpSocket: dgram.Socket = dgram.createSocket("udp4");
udpSocket.bind(2053, "127.0.0.1");

udpSocket.on("message", (data: Buffer, remoteAddr: dgram.RemoteInfo) => {
    try {
        console.log(`Received data from ${remoteAddr.address}:${remoteAddr.port}`);

        const packet: DNSPacket = {
            packetIdentifier: 1234,
            qr: 1,
            opcode: 0,
            authoritativeAnswer: 0,
            truncation: 0,
            recursionDesired: 0,
            recursionAvailable: 0,
            reserved: 0,
            responseCode: 0,
            questionCount: 0,
            answerRecordCount: 0,
            authorityRecordCount: 0,
            additionalRecordCount: 0
        }

        const response = dnsPacketEncode(packet)
        udpSocket.send(response, remoteAddr.port, remoteAddr.address);
    } catch (e) {
        console.log(`Error sending data: ${e}`);
    }
});
