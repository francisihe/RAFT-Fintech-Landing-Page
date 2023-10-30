import financialFreedomImage from '../assets/images/section-image-2.svg'

const YourFinancialFreedon = () => {
    return (
        <div className="mt-16 mb-24 w-screen">
            <div className="flex flex-col space-x-auto mx-auto my-16 text-center justify-center">
                <div>
                    <h2 className="text-white tracking-wide text-5xl max-w-2xl mx-auto">
                        Your Financial Freedom, {<br />}
                        Your Way
                    </h2>
                </div>
                <div className="m-auto my-4 max-w-lg">
                    <p className="text-custom-offwhite text-sm">
                        We believe that managing your finances should be effortless and cost-effective.
                        That's why we offer you the freedom you deserve
                    </p>
                </div>

                <div className='mx-auto md:mx-14 lg:h-auto lg:mx-72 lg:max-w-screen-2xl pt-8'>
                    <img src={financialFreedomImage}
                        alt='Financial Freedom Image'
                        className="max-w-full h-auto" />
                </div>

            </div>

            <div className='md:mx-14 lg:mx-64 lg:max-w-screen-2xl'>
                <div className='flex justify-between text-white'>
                    <div className='w-1/3'>
                        <div className='flex gap-1'>
                            <svg width="18" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5C9.75736 5 8.75 6.00736 8.75 7.25C8.75 8.49264 9.75736 9.5 11 9.5C12.2426 9.5 13.25 8.49264 13.25 7.25C13.25 6.00736 12.2426 5 11 5Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 2.375C0.5 1.33947 1.33947 0.5 2.375 0.5H19.625C20.6605 0.5 21.5 1.33947 21.5 2.375V12.125C21.5 13.1605 20.6605 14 19.625 14H2.375C1.33947 14 0.5 13.1605 0.5 12.125V2.375ZM7.25 7.25C7.25 5.17893 8.92893 3.5 11 3.5C13.0711 3.5 14.75 5.17893 14.75 7.25C14.75 9.32107 13.0711 11 11 11C8.92893 11 7.25 9.32107 7.25 7.25ZM17.75 6.5C17.3358 6.5 17 6.83579 17 7.25V7.2575C17 7.67171 17.3358 8.0075 17.75 8.0075H17.7575C18.1717 8.0075 18.5075 7.67171 18.5075 7.2575V7.25C18.5075 6.83579 18.1717 6.5 17.7575 6.5H17.75ZM3.5 7.25C3.5 6.83579 3.83579 6.5 4.25 6.5H4.2575C4.67171 6.5 5.0075 6.83579 5.0075 7.25V7.2575C5.0075 7.67171 4.67171 8.0075 4.2575 8.0075H4.25C3.83579 8.0075 3.5 7.67171 3.5 7.2575V7.25Z" fill="white" />
                                <path d="M1.25 15.5C0.835786 15.5 0.5 15.8358 0.5 16.25C0.5 16.6642 0.835786 17 1.25 17C6.65005 17 11.8802 17.7222 16.8498 19.0749C18.0404 19.399 19.25 18.5168 19.25 17.2551V16.25C19.25 15.8358 18.9142 15.5 18.5 15.5H1.25Z" fill="white" />
                            </svg>
                            <div className='font-bold mb-2'>No minimum balance fees</div>
                        </div>
                        <div className='text-sm font-light pr-4'>
                            Say goodbye to minimum balance fees. Your account, your balance—no hidden charges
                        </div>
                    </div>

                    <div className='w-1/3'>
                        <div className='flex gap-1'>
                            <svg width="18" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 4.875C18 7.56739 13.9706 9.75 9 9.75C4.02944 9.75 0 7.56739 0 4.875C0 2.18261 4.02944 0 9 0C13.9706 0 18 2.18261 18 4.875Z" fill="white" />
                                <path d="M9 11.25C11.6852 11.25 14.1905 10.6637 16.0784 9.64108C16.7684 9.26734 17.4248 8.80433 17.9747 8.25674C17.9915 8.37831 18 8.50111 18 8.625C18 11.3174 13.9706 13.5 9 13.5C4.02944 13.5 0 11.3174 0 8.625C0 8.50111 0.00853154 8.3783 0.0252937 8.25674C0.575227 8.80433 1.23162 9.26734 1.92161 9.64108C3.80949 10.6637 6.31481 11.25 9 11.25Z" fill="white" />
                                <path d="M9 15C11.6852 15 14.1905 14.4137 16.0784 13.3911C16.7684 13.0173 17.4248 12.5543 17.9747 12.0067C17.9915 12.1283 18 12.2511 18 12.375C18 15.0674 13.9706 17.25 9 17.25C4.02944 17.25 0 15.0674 0 12.375C0 12.2511 0.00853154 12.1283 0.0252937 12.0067C0.575227 12.5543 1.23162 13.0173 1.92161 13.3911C3.80949 14.4137 6.31481 15 9 15Z" fill="white" />
                                <path d="M9 18.75C11.6852 18.75 14.1905 18.1637 16.0784 17.1411C16.7684 16.7673 17.4248 16.3043 17.9747 15.7567C17.9915 15.8783 18 16.0011 18 16.125C18 18.8174 13.9706 21 9 21C4.02944 21 0 18.8174 0 16.125C0 16.0011 0.00853154 15.8783 0.0252937 15.7567C0.575227 16.3043 1.23162 16.7673 1.92161 17.1411C3.80949 18.1637 6.31481 18.75 9 18.75Z" fill="white" />
                            </svg>
                            <div className='font-bold mb-2'>No Monthly Fees</div>
                        </div>
                        <div className='text-sm font-light pr-4'>
                            Bank with us without worrying about monthly fees.
                            Keep more of your money where it belongs—in your account
                        </div>
                    </div>

                    <div className='w-1/3'>
                        <div className='flex gap-1'>
                            <svg width="18" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9697 2.96967C16.2626 2.67678 16.7374 2.67678 17.0303 2.96967L21.5303 7.46967C21.671 7.61032 21.75 7.80109 21.75 8C21.75 8.19891 21.671 8.38968 21.5303 8.53033L17.0303 13.0303C16.7374 13.3232 16.2626 13.3232 15.9697 13.0303C15.6768 12.7374 15.6768 12.2626 15.9697 11.9697L19.1893 8.75L7.5 8.75C7.08579 8.75 6.75 8.41421 6.75 8C6.75 7.58579 7.08579 7.25 7.5 7.25L19.1893 7.25L15.9697 4.03033C15.6768 3.73744 15.6768 3.26256 15.9697 2.96967ZM8.03033 11.9697C8.32322 12.2626 8.32322 12.7374 8.03033 13.0303L4.81066 16.25H16.5C16.9142 16.25 17.25 16.5858 17.25 17C17.25 17.4142 16.9142 17.75 16.5 17.75H4.81066L8.03033 20.9697C8.32322 21.2626 8.32322 21.7374 8.03033 22.0303C7.73744 22.3232 7.26256 22.3232 6.96967 22.0303L2.46967 17.5303C2.17678 17.2374 2.17678 16.7626 2.46967 16.4697L6.96967 11.9697C7.26256 11.6768 7.73744 11.6768 8.03033 11.9697Z" fill="white" />
                            </svg>
                            <div className='font-bold mb-2'>No Bank Transfer Fees</div>
                        </div>
                        <div className='text-sm font-light pr-4'>
                            Seamlessly transfer funds without the extra cost.
                            Send and receive money with zero bank transfer fees.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default YourFinancialFreedon