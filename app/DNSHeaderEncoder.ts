import {DNSPacket} from "./DNSPacket.type";


export const dnsPacketEncode = (packet: DNSPacket) => {
    const buffer = Buffer.alloc(12);


    buffer.writeUInt16BE(packet.packetIdentifier, 0);

    buffer.writeUInt8(packet.qr, 2);
    buffer.writeUInt8(packet.opcode, 3);
    buffer.writeUInt8(packet.authoritativeAnswer, 4);
    buffer.writeUInt8(packet.truncation, 5);
    buffer.writeUInt8(packet.recursionDesired, 6);
    buffer.writeUInt8(packet.recursionAvailable, 7);
    buffer.writeUInt8(packet.reserved, 8);
    buffer.writeUInt8(packet.responseCode, 9);

    buffer.writeUInt8(packet.questionCount, 10);
    buffer.writeUInt8(packet.answerRecordCount, 12);
    buffer.writeUInt8(packet.authorityRecordCount, 14);
    buffer.writeUInt8(packet.additionalRecordCount, 16);

    return buffer;
}
