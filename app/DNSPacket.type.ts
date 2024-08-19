
export type DNSPacket = {
    /**
     * @size 16bits
     * @description Response packets must reply with the same ID.
     * */
    packetIdentifier: number;
    /**
     * @size 1 bit
     * @description 1 for a reply packet, 0 for a question packet.
     * */
    qr: number;

    /**
     * @size 4 bits
     * @description Specifies the kind of query in a message.
     * */
    opcode: number;

    /**
     * @size 1 bit
     * @description 1 if the responding server "owns" the domain queried, i.e., it's authoritative.
     * */
    authoritativeAnswer: number
    /**
     * @size 1 bit
     * @description 1 if the message is larger than 512 bytes. Always 0 in UDP responses.
     * */
    truncation: number;
    /**
     * @size 1 bit
     * @description Sender sets this to 1 if the server should recursively resolve this query, 0 otherwise.
     * */
    recursionDesired: number;
    /**
     * @size 1 bit
     * @description Server sets this to 1 to indicate that recursion is available.
     * */
    recursionAvailable: number;
    /**
     * @size 3 bits
     * @description Used by DNSSEC queries. At inception, it was reserved for future use.
     * */
    reserved: number;
    /**
     * @size 4 bits
     * @description Response code indicating the status of the response.
     * */
    responseCode: number;
    /**
     * @size 16 bits
     * @description Number of questions in the Question section.
     * */
    questionCount: number;
    /**
     * @size 16 bits
     * @description Number of records in the Answer section.
     * */
    answerRecordCount: number;
    /**
     * @size 16 bits
     * @description Number of records in the Authority section.
     * */
    authorityRecordCount: number;
    /**
     * @size 16 bits
     * @description Number of records in the Additional section.
     * */
    additionalRecordCount: number;

}