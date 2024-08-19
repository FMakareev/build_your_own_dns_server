import {DNSPacket} from "./DNSPacket.type";

export const dnsPacketEncode = (packet: DNSPacket) => {
    const buffer = Buffer.alloc(12);

    buffer.writeUInt16BE(packet.packetIdentifier, 0);

    let flags = 0;
    flags |= (packet.qr & 0x01) << 15;
    flags |= (packet.opcode & 0x0F) << 11;
    flags |= (packet.authoritativeAnswer & 0x01) << 10;
    flags |= (packet.truncation & 0x01) << 9;
    flags |= (packet.recursionDesired & 0x01) << 8;
    flags |= (packet.recursionAvailable & 0x01) << 7;
    flags |= (packet.reserved & 0x07) << 4;
    flags |= (packet.responseCode & 0x0F);

    buffer.writeUInt16BE(flags, 2);

    buffer.writeUInt16BE(packet.questionCount, 4);


    buffer.writeUInt16BE(packet.answerRecordCount, 6);


    buffer.writeUInt16BE(packet.authorityRecordCount, 8);

    buffer.writeUInt16BE(packet.additionalRecordCount, 10);

    return buffer;
}
